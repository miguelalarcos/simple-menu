Template.smenu.events
  'click .close': (e, t) ->
    $('.menu.active').removeClass('active')
  'click .menu .item': (e,t) ->
    next = $(e.target).attr('next')
    if next
      $('.menu.active').removeClass('active')
      $('.menu.'+next).addClass('active')

Template.smenu.onRendered ->
  $(this.findAll('.nano')).nanoScroller(scroll: 'top')
