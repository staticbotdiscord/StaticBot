const { MessageOptions } = require('discord.js');

class MessageBuilder extends MessageOptions {
    constructor() {
        this.tts = false;
        this.nonce = '';
        this.content = '';
        this.embeds = [];
        this.allowedMentions = null;
        this.files = [];
        this.components = [];
        this.attachments = [];
        this.reply = null;
        this.stickers = [];
        this.flags = null;

        return this;
    }

    setTTS(tts) {
        if(typeof tts ?? false != 'boolean') throw new Error('TypeError: TTS must be a boolean value.');
        this.tts = tts ?? false;
        return this;
    }

    setNonce(nonce) {
        if(typeof nonce ?? '' != 'string') throw new Error('TypeError: Nonce must be a string value.');
        this.nonce = nonce ?? '';
        return this;
    }

    setContent(content) {
        if(typeof content ?? '' != 'string') throw new Error('TypeError: Content must be a string value.');
        this.content = content ?? '';
        return this;
    }

    setEmbeds(embeds) {
        const embeds1 = embeds ?? [];
        if(!Array.isArray(embeds1)) throw new Error('TypeError: Embeds must be an array.');
        this.embeds = embeds1;
        return this;
    }

    setAllowedMentions(allowedMentions) {
        if(typeof allowedMentions ?? '' != 'string') throw new Error('TypeError: AllowedMentions must be a string value.');
        this.allowedMentions = allowedMentions ?? '';
        return this;
    }

    setFiles(files) {
        const files1 = files ?? [];
        if(!Array.isArray(files1)) throw new Error('TypeError: Files must be an array.');
        this.files = files1;
        return this;
    }

    setComponents(components) {
        const components1 = components ?? [];
        if(!Array.isArray(components1)) throw new Error('TypeError: Components must be an array.');
        this.components = components1;
        return this;
    }

    setAttachments(attachments) {
        const attachments1 = attachments ?? [];
        if(!Array.isArray(attachments1)) throw new Error('TypeError: Attachments must be an array.');
        this.attachments = attachments1;
        return this;
    }

    setReply(reply) {
        const reply1 = reply ?? null;
        if(typeof reply1 != 'object' && reply1 != null) throw new Error('TypeError: Reply must be an object or null.');
        this.reply = reply;
        return this;
    }

    setStickers(stickers) {
        const stickers1 = stickers;
        if(!Array.isArray(stickers1)) throw new Error('TypeError: Stickers must be an array.');
        this.stickers = stickers1;
        return this;
    }

    setFlags(flags) {
        const flags1 = flags ?? null;
        if(typeof flags1 != 'number' && flags != null) throw new Error('TypeError: Flags must be a number or array');
        this.flags = flags1;
        return this;
    }
}