module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');
        client.user.setPresence({ activities: [{ name: 'Template By AlbinoFox#6901' }], status: 'idle' }); // "name:" is the text that appears in your activity. "status:" is your bots status (online, idle, dnd, invisible)
    },
};