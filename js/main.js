function updateOutput(input) {
  if (input === '') {
    $('#output').html('<span class="placeholder">Formatted text</span>')
    return
  }
  
  $('#output').html(input.replace(/\^[0-9]/g, v => {
    const col = v.slice(1)
    return `</span><span class="color-${col}">`
  })
  .replace(/\^[*_~=r]/g, v => {
    const styleDict = {
      '*': 'font-weight: bold;',
      '_': 'text-decoration: underline;',
      '~': 'text-decoration: line-through;',
      '=': 'text-decoration: underline line-through;',
      'r': 'text-decoration: none; font-weight: normal;',
    }
    const symbol = v.slice(1)
    if (symbol === 'r') console.log('hej');
    
    return `</span><span style="${styleDict[symbol]}">`
  })
  .replace(/\n/g, '<br>'))
}

$('#input').val(`-- COLORS --
^0 No color (both white and black depending on the theme)
^1 Red Orange
^2 Light Green
^3 Light Yellow
^4 Dark Blue
^5 Light Blue
^6 Violet
^7 White
^8 Blood Red
^9 Fuchsia

^0-- FORMATTING --
^* Bold
^_ Underline
^~ Strikethrough
^= Underline + Strikethrough
^r Clear Formatting (not color)`)

updateOutput($('#input').val())
$('#input').get()[0].addEventListener('input', e => {
  updateOutput($('#input').val())
});