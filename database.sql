--users table

create table users(
    user_id serial primary key, 
    email varchar(255) unique not null,
    created_at date default current_date   
);
--forgot the name columns
alter table users add first_name varchar(255) not null, add last_name varchar(255) not null;


create table moods(
    mood_id serial primary key,
    mood_name varchar(255) unique not null,
    created_at date default current_date
);


create table emotions(
    emotion_id serial primary key,
    emotion_name varchar(255) unique not null,
    created_at date default current_date
);
