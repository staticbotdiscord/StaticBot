/**
 * 
 *
 *  **/

class Command {
    constructor(options) {
        const { data, ephemeral } = options;
        this.data = data;
        this.ephemeral = ephemeral;
        this.execute = null;
    }

    async execute(command) {
        this.execute = command(client, interaction, options);

        return this;
    }
}