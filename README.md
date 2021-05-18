## Описание

Тестовое задание для fullstack: Создание телефонного справочника на Nest.js и VueJS (Vuetify)

## Запуск

```bash
# Дамп базы данных находится в файле Clients_dump.sql

# Запускаем nest в папке phonebook-list-app-backend
$ npm run start:dev

# Далее запускаем vue в папке client-list-app-frontend
$ npm run serve
```

## Адреса

```bash
# Api находится по адресу
http://localhost:3000/

# Vue находится по адресу 
http://localhost:8080/

# Для подключения к БД были использованы следующие настройки
# Изменять текущие настройки \phonebook-list-app-backend\src\orm.config
    type: 'postgres',       //Тип БД
    username: 'postgres',   //Пользователь
    password: 'pass',       //Пароль
    port: 5432,             //Порт
    host: '127.0.0.1',      
    database: 'Clients',    //Имя БД
    synchronize: true,
    entities: ['dist/**/*.entity{.ts,.js}']
```
