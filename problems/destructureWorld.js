function destructureWorld(world, char) {
    return world.split('').reverse().filter(a => a !== char).join('')
}

console.log(destructureWorld('salom', 'o'));