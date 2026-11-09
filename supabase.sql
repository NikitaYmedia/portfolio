create table if not exists public.reviews (
    id          bigint generated always as identity primary key,
    name        text    not null check (char_length(name) between 1 and 60),
    rating      int     not null check (rating between 1 and 5),
    text        text    not null check (char_length(text) between 5 and 600),
    approved    boolean not null default true,   -- see MODERATION note below
    created_at  timestamptz not null default now()
);

alter table public.reviews enable row level security;

create policy "public can read approved reviews"
    on public.reviews for select
    to anon, authenticated
    using (approved = true);

create policy "public can add reviews"
    on public.reviews for insert
    to anon, authenticated
    with check (approved = true);

create policy "admin full access"
    on public.reviews for all
    to authenticated
    using ((auth.jwt() ->> 'email') = 'nikitaelcov899@gmail.com')
    with check ((auth.jwt() ->> 'email') = 'nikitaelcov899@gmail.com');
