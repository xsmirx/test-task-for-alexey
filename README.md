# Тестовое задание

Задание выполнено в [Create React App](https://github.com/facebook/create-react-app).

### Запуск проекта в режиме разработки

`yarn start`

# Описание

### GroupFields

Требуемая компонента, описанная в тестовом задании находится в `src/components/GroupFields`

Компонента GroupFields является управляемой и принимает такие аргументы (props):

1. config - объект конфигурации вида, который указан в задании

```angular2html
{
  ‘first_name’: {
    type: ‘inputText’,
    label: ‘First Name’,
    defaultValue: ‘Some first name’,
  }
  ‘last_name’: {
    type: ‘inputText’,
    label: ‘Last Name’,
  }
  ‘email’: {
    type: ‘inputEmail’, 
    label: ‘Email’
  }
  ‘password’: {
    type: ‘inputPassword,
    label: ‘Password’,
  }
}
```

Конфигурация для компоненты группы полей указывается в файле проекта `src/config.ts`

2. values - значение группы полей вида

```angular2html
{
‘first_name’: ‘Some first name’,
‘last_name’: ‘Some last name’,
‘email’: ’example@user.com’,
‘password’: ‘123456’,
}
```

3. onChange - колбек возвращающий при изменении значение группы полей вида, как указано в задании

```angular2html
{
‘first_name’: ‘Some first name’,
‘last_name’: ‘Some last name’,
‘email’: ’example@user.com’,
‘password’: ‘123456’,
}
```

Внутри компоненты реализован единый метод для обработки событий любого из полей, который вызывает метод onChange со
значениями полей

### Form

Компонента Form содержит компоненту GroupFields и кнопку, состояние которой зависит от содержания полей и от
правильности ввода полей с типом `inputEmail` (позволил себе еще прикрутить валидацию email полей)
