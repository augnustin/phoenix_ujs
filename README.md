# phoenix_ujs

Phoenix Unobtrusive Javascript, inspired from [rails_ujs](https://github.com/rails/rails/tree/master/actionview/app/assets/javascripts), connected with phoenix backend, but still independant.

## Motivations

[rails_ujs](https://github.com/rails/rails/tree/master/actionview/app/assets/javascripts) is a very powerful tool for full-stack devs to make sure front-end and back-end talk together easily.

Some of their features are implemented in [Elixir Phoenix Framework](https://phoenixframework.org/) [JS plugin](https://github.com/phoenixframework/phoenix_html) but as [stated by one of their creator Jose Valim](https://github.com/phoenixframework/phoenix_html/issues/275#issuecomment-544628700), it should eventually has been left independent.

Hence the point of this repo is to rewrite rails_ujs adapted to phoenix.

## Features

Already built-in:

- `POST`, `PUT` and `DELETE` requests on buttons
- `data-confirm` attribute

Written:

- `data-disable-with`

TODO:

- `<form data-remote="true">`: best rails_ujs feature IMHO

## Other repos

There is [this repo](https://github.com/jalkoby/phoenix_ujs) which aims at doing the same but:

- it lacks of severa key features
- it is backend agnostic, which is not very logical when writing **phoenix**_ujs
- written in vanilla JS, which is good but one should consider having a jQuery version too