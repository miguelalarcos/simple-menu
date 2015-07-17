simple-menu
===========
A very very simple menu for Meteor.

Explanation
-----------
Here you can see an example:

```jade
head
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

body(style='background-color: rgb(135, 191, 114)')
    +smenu
    h1
        i.show.ion-navicon-round

template(name='menu')
    +first isphone=isPhone
    +second isphone=isPhone
    +third isphone=isPhone

template(name='first')
    .menu.first(class=isphone)
        .nano
            .nano-content
                h2 header1
                    i.close.ion-close
                div.item
                    a(href='/amarillo/') amarillo
                div.item(next='second') rojo >

template(name='second')
    .menu.second(class=isphone)
        .nano
            .nano-content
                h2 header2
                    i.close.ion-close
                div.item(next='first')
                    | &lt; back
                div.item
                    a(href='/casa/') casa
                //div.item(next='third') coche >
                button.item(next='third') coche >

template(name='third')
    .menu.third(class=isphone)
        .nano
            .nano-content
                h2 header 2b
                    i.close.ion-close
                div.item(next='second')
                    | &lt; back
                div.item
                    a(href='/coche/playa/') playa
                div.item(next='first') montaña >
```
                
```coffee
Template.smenu.helpers
  template: -> 'menu'

Template.menu.helpers
  isPhone: ->
    if Meteor.Device.isPhone()
      'is-phone'
    else
      ''
Template.body.events
  'click .show': (e,t) ->
    $('.menu.first').addClass('active')
               
```

```stylus
.nano
  height 500px 

.menu div.item:hover
  background-color rgb(191, 114, 171)

i.show
  cursor pointer
```