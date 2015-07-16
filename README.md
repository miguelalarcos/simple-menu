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
    //if Session 'show'
    +menu
    h1
        i.show.ion-navicon-round
        
template(name='menu2')
    +first color=color isphone=isPhone
    +second color=color isphone=isPhone
    +third color=color isphone=isPhone
    
template(name='first')
    .menu.first(class=isphone style='{background-color: #{color}')
        .nano
            .nano-content
                h2 header1
                    i.close.ion-close
                div
                    a(href='/amarillo/') amarillo
                div(next='second') rojo >
                    
template(name='second')
    .menu.second(class=isphone style='{background-color: #{color}')
        .nano
            .nano-content
                h2 header2
                    i.close.ion-close
                div(next='first')
                    | &lt; back
                div
                    a(href='/casa/') casa
                div(next='third') coche >
                    
template(name='third')
    .menu.third(class=isphone style='{background-color: #{color}')
        .nano
            .nano-content
                h2 header 2b
                    i.close.ion-close
                div(next='second')
                    | &lt; back
                div
                    a(href='/coche/playa/') playa
                div(next='first') montaña >
```
                
```coffee
Template.menu.helpers
  template: -> 'menu2'                
```