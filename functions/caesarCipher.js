export default function caesarCipher(str, offset) {
  let alpha = 'abcdefghijklmnopqrstuvwxyz'    

  return str.split(' ').map(word => {
      return word.split('').map(ltr => {
          alpha = letterCasing(alpha, ltr)
          
          if (
            !alpha.match(ltr) || 
            ltr.match(/^[\W áéíóúñÑ,.()!-+%$]*$/)
          ) return ltr
          else return ltr.replace(ltr, alpha[offsetIndex(alpha, ltr, offset)])

      }).join('')
  }).join(' ')
}


function letterCasing(alpha, ltr) {
  return alpha.match(ltr) === null && alpha.includes(ltr.toLowerCase()) 
        ? alpha.toUpperCase() 
        : alpha.toLowerCase()
}

function offsetIndex(alpha, ltr, offset) {
  let offsetIndex = alpha.indexOf(ltr) + offset 
      offsetIndex = 
      offsetIndex >= alpha.length 
      ? offsetIndex - alpha.length 
      : offsetIndex
  return offsetIndex
}