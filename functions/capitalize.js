export default function capitalize(str) {
  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

