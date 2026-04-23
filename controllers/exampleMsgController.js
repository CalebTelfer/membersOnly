async function printHello(req,res) {
    res.send("Hello!");
}

module.exports = { printHello };