## Демо
https://github.com/walkerman-on/scada-web/assets/82907949/72dc2d6d-1db0-4750-9ad2-b9d5f8a9ac3a

---

## Описание проекта
Человеко-машинный интерфейс компьютерного тренажера для нефтегазовой отрасли.
Реализована полноценная фронтальная часть SPA:
- [x] Регистрация и авторизация пользователя
- [x] Переход на выбранную технологическую схему установки завода
- [x] Визуализация технологической схемы
- [x] Описание технологической схемы
- [x] Переключение между установками одного завода
- [x] Вывод необходимой информации о технологических параметрах в сжатом и развернутом виде
- [x] Личный кабинет пользователя
- [x] Смена темы интерфейса (светлая / темная)
- [x] Обработаны ошибки при переходе на некорректный URL адрес

---

## Запуск проекта

Прежде чем запускать проект, необходимо создать файл `.env` в корневой директории проекта. В этом файле укажите следующую конфигурацию для подключения к Firebase:

```.env
FIREBASE_API_KEY = "apiKey"
FIREBASE_API_AUTH_DOMAIN = "authDomain"
FIREBASE_API_PROJECT_ID = "projectId"
FIREBASE_API_STORAGE_BUCKET = "storageBucket"
FIREBASE_API_MESSAGING_SENDER_ID = "messagingSenderId"
FIREBASE_API_APP_ID = "appId"
```

Замените "apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId", и "appId" соответственно вашими значениями, полученными от Firebase.

Эти параметры необходимы для правильной идентификации вашего проекта Firebase и его подключения к приложению.
- [ ] Ссылка на документацию - [Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)

```
npm install - устанавливаем зависимости
npm start - запуск UI
```

---

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)

---

## Архитектура проекта

Проект написан в соответствии с методологией Feature Sliced Design
- [ ] Ссылка на документацию - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Конфигурация проекта

Для разработки проект содержит Webpack конфиг

Вся конфигурация хранится в ./config

---

### Работа с данными

Взаимодействие с данными осуществляется с помощью Redux Toolkit

📈 В качестве авторизации используется сервис Firebase Authentication
- [ ] Ссылка на документацию - [Firebase Authentication](https://firebase.google.com/docs/auth)

📈 В качестве базы данных предприятий / установок используется сервис Firebase Realtime Database
- [ ] Ссылка на документацию - [Firebase Realtime Database](https://firebase.google.com/docs/database)

Для корректной работы приложения необходимо создать такую конфигурацию базы данных в [Firebase Realtime Database](https://firebase.google.com/docs/database):
```
📦 Database
┣ 📂 factories
┃ ┣ 📂 factory_1
┃ ┃ ┣ 📜 title: string,
┃ ┃ ┣ 📜 id: number,
┃ ┃ ┣ 📜 key: string,
┃ ┃ ┣ 📜 enabled: boolean,
┃ ┃ ┗ 📜 visible: boolean,
┃ ┗ ...
┣ 📂 facilities
┃ ┣ 📂 facility_1
┃ ┃ ┣ 📜 title: string,
┃ ┃ ┣ 📜 description: string,
┃ ┃ ┣ 📜 id: string,
┃ ┃ ┣ 📜 factoryId: string,
┃ ┃ ┣ 📜 schemeDarkURL: string,
┃ ┃ ┣ 📜 schemeLightURL: string,
┃ ┃ ┣ 📜 enabled: boolean,
┃ ┃ ┗ 📜 visible: boolean,
┃ ┗ ...
┣ 📂 valves
┃ ┣ 📂 valve_1
┃ ┃ ┣ 📂 parameters
┃ ┃ ┃ ┣ 📜 collapsedPositionX: number,
┃ ┃ ┃ ┣ 📜 collapsedPositionY: number,
┃ ┃ ┃ ┣ 📜 expandedPositionX: number,
┃ ┃ ┃ ┗ 📜 expandedPositionY: number,
┃ ┃ ┃ ┣ 📂 flow
┃ ┃ ┃ ┃ ┣ 📜 id: string,
┃ ┃ ┃ ┃ ┣ 📜 name: string,
┃ ┃ ┃ ┃ ┣ 📜 title: string,
┃ ┃ ┃ ┃ ┣ 📜 unit: string,
┃ ┃ ┃ ┃ ┗ 📜 value: number,
┃ ┃ ┃ ┣ 📂 pressure
┃ ┃ ┃ ┃ ┣ 📜 id: string,
┃ ┃ ┃ ┃ ┣ 📜 name: string,
┃ ┃ ┃ ┃ ┣ 📜 title: string,
┃ ┃ ┃ ┃ ┣ 📜 unit: string,
┃ ┃ ┃ ┃ ┗ 📜 value: number,
┃ ┃ ┃ ┣ 📂 pressureDrop
┃ ┃ ┃ ┃ ┣ 📜 id: string,
┃ ┃ ┃ ┃ ┣ 📜 name: string,
┃ ┃ ┃ ┃ ┣ 📜 title: string,
┃ ┃ ┃ ┃ ┣ 📜 unit: string,
┃ ┃ ┃ ┃ ┗ 📜 value: number,
┃ ┃ ┃ ┣ 📂 temperature
┃ ┃ ┃ ┃ ┣ 📜 id: string,
┃ ┃ ┃ ┃ ┣ 📜 name: string,
┃ ┃ ┃ ┃ ┣ 📜 title: string,
┃ ┃ ┃ ┃ ┣ 📜 unit: string,
┃ ┃ ┃ ┃ ┗ 📜 value: number,
┃ ┃ ┃ ┣ 📂 valveOpening
┃ ┃ ┃ ┃ ┣ 📜 id: string,
┃ ┃ ┃ ┃ ┣ 📜 name: string,
┃ ┃ ┃ ┃ ┣ 📜 title: string,
┃ ┃ ┃ ┃ ┣ 📜 unit: string,
┃ ┃ ┃ ┃ ┗ 📜 value: number,
┃ ┃ ┗ 📂 valve
┃ ┃ ┃ ┣ 📜 collapsedPositionX: number,
┃ ┃ ┃ ┣ 📜 collapsedPositionY: number,
┃ ┃ ┃ ┣ 📜 expandedPositionX: number,
┃ ┃ ┃ ┣ 📜 expandedPositionY: number,
┃ ┃ ┃ ┣ 📜 facilityId: string,
┃ ┃ ┃ ┣ 📜 id: string,
┃ ┃ ┃ ┣ 📜 name: string,
┃ ┃ ┃ ┗ 📜 title: string,
┃ ┗ ...
┗ 
```

🖼️ В качестве хранения статичных файлов используется сервис Cloud Storage for Firebase
- [ ] Ссылка на документацию - [Cloud Storage for Firebase](https://firebase.google.com/docs/storage)

Для корректной работы приложения необходимо создать такую конфигурацию хранения статичных файлов в [Cloud Storage for Firebase](https://firebase.google.com/docs/storage):
```
📦 Storage
┣ 📂 factories
┃ ┣ 📂 factory_1
┃ ┃ ┣ 📂 facility_1
┃ ┃ ┃ ┣ 🖼️ SchemeDark.svg
┃ ┃ ┗ ┗ 🖼️ SchemeLight.svg
┃ ┗ ...
┗

```

---

## Технологии
React, React Router, TypeScript, Redux Toolkit, SCSS module, Webpack, Ant Design, Google Firebase (Authentication, Realtime Database, Cloud Storage)

---
