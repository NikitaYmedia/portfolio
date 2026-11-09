-- Run this once in Supabase: SQL Editor -> New query -> paste -> Run.
-- BEFORE running: replace YOUR_ADMIN_EMAIL (appears once, near the bottom) with the email you will log in with.

create table if not exists public.reviews (
    id          bigint generated always as identity primary key,
    name        text    not null check (char_length(name) between 1 and 60),
    rating      int     not null check (rating between 1 and 5),
    text        text    not null check (char_length(text) between 5 and 600),
    approved    boolean not null default true,   -- see MODERATION note below
    created_at  timestamptz not null default now()
);

alter table public.reviews enable row level security;

-- Visitors: read approved reviews only
create policy "public can read approved reviews"
    on public.reviews for select
    to anon, authenticated
    using (approved = true);

-- Visitors: add a review (it can never be inserted as "unapproved-bypass" - approved is forced to the default)
create policy "public can add reviews"
    on public.reviews for insert
    to anon, authenticated
    with check (approved = true);

-- Admin (only this email): read everything, approve, delete
create policy "admin full access"
    on public.reviews for all
    to authenticated
    using ((auth.jwt() ->> 'email') = 'YOUR_ADMIN_EMAIL')
    with check ((auth.jwt() ->> 'email') = 'YOUR_ADMIN_EMAIL');

-- MODERATION (optional): to show new reviews only after you approve them, run this instead/afterwards:
--   alter table public.reviews alter column approved set default false;
--   drop policy "public can add reviews" on public.reviews;
--   create policy "public can add reviews" on public.reviews for insert to anon, authenticated with check (approved = false);
-- Pending reviews then appear in admin.html with an "Approve" button.
