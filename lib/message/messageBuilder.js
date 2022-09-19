/**
 *  @author Noinkin
 */

/**
 *  Create a message
 *  @example
 *  // returns { tts: false, nonce: '', content: 'MyMessage', embeds: [], allowedMentions: null, files: [], components: [], attachments: [], reply: null, stickers: [], flags: null }
 *  const myMessage = new MessageBuilder()
 *      .setContent('MyMessage');
 *  @example
 *  // returns { tts: true, nonce: '', content: 'My Other Message', embeds: [], allowedMentions: null, files: [], components: [], attachments: [], reply: null, stickers: [], flags: null }
 *  const myOtherMessage = new MessageBuilder()
 *      .setTTS(true)
 *      .setContent('My Other Message');
 */
class MessageBuilder {
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
    
    /**
     * Whether the message is spoken aloud
     * @default false
     * @param {boolean} tts Whether the message is spoken aloud
     * @returns {object} this
     * @access public
     * @throws {TypeError} If tts is not a boolean value
     */
    setTTS(tts) {
        if(typeof tts ?? false != 'boolean') throw new Error('TypeError: TTS must be a boolean value.');
        this.tts = tts ?? false;
        return this;
    }

    /**
     * The nonce for the message
     * @default ''
     * @param {string} nonce The nonce
     * @returns {object} this
     * @access public
     * @throws {TypeError} If nonce is not a string value
     */
    setNonce(nonce) {
        if(typeof nonce ?? '' != 'string') throw new Error('TypeError: Nonce must be a string value.');
        this.nonce = nonce ?? '';
        return this;
    }

    /**
     * The content of the message
     * @default ''
     * @param {string} content The content
     * @returns {object} this
     * @access public
     * @throws {TypeError} If content is not a string value
     */
    setContent(content) {
        if(typeof content ?? '' != 'string') throw new Error('TypeError: Content must be a string value.');
        this.content = content ?? '';
        return this;
    }

    /**
     * The embeds for the message
     * @default []
     * @param {[]} embeds The embeds
     * @returns {object} this
     * @access public
     * @throws {TypeError} If embeds is not an array
     */
    setEmbeds(embeds) {
        let embeds1 = embeds ?? [];
        if(!Array.isArray(embeds1)) throw new Error('TypeError: Embeds must be an array.');
        if (embeds1 && embeds1.length > 10) {
			embeds1 = embeds1.slice(0, 10);
		}
        this.embeds = embeds1;
        return this;
    }

    /**
     * What the message is allowed to mention
     * @default ''
     * @param {string} allowedMentions The allowed mentions
     * @returns {object} this
     * @access public
     * @throws {TypeError} If allowedMentions is not a string
     */
    setAllowedMentions(allowedMentions) {
        if(typeof allowedMentions ?? '' != 'string') throw new Error('TypeError: AllowedMentions must be a string value.');
        this.allowedMentions = allowedMentions ?? '';
        return this;
    }

    /**
     * The files to attach to the message
     * @default []
     * @param {[]} files The files to attach
     * @returns {object} this
     * @access public
     * @throws {TypeError} If files is not an array
     */
    setFiles(files) {
        const files1 = files ?? [];
        if(!Array.isArray(files1)) throw new Error('TypeError: Files must be an array.');
        this.files = files1;
        return this;
    }

    /**
     * The components to add to the message
     * @default []
     * @param {[]} components The components
     * @returns {object} this
     * @access public
     * @throws {TypeError} If components is not an array
     */
    setComponents(components) {
        const components1 = components ?? [];
        if(!Array.isArray(components1)) throw new Error('TypeError: Components must be an array.');
        this.components = components1;
        return this;
    }

    /**
     * The attachments for the message
     * @default []
     * @param {[]} attachments The attachments
     * @returns {object} this
     * @access public
     * @throws {TypeError} If attachments is not an array
     */
    setAttachments(attachments) {
        const attachments1 = attachments ?? [];
        if(!Array.isArray(attachments1)) throw new Error('TypeError: Attachments must be an array.');
        this.attachments = attachments1;
        return this;
    }

    /**
     * Whether the message will reply to another
     * @default null
     * @param {object} reply The message to reply to
     * @returns {object} this
     * @access public
     * @throws {TypeError} If reply is not an object or null
     */
    setReply(reply) {
        const reply1 = reply ?? null;
        if(typeof reply1 != 'object' && reply1 != null) throw new Error('TypeError: Reply must be an object or null.');
        this.reply = reply;
        return this;
    }
    
    /**
     * The stickers to add to the message
     * @default []
     * @param {[]} stickers The stickers
     * @returns {object} this
     * @access public
     * @throws {TypeError} If stickers is not an array
     */
    setStickers(stickers) {
        const stickers1 = stickers ?? [];
        if(!Array.isArray(stickers1)) throw new Error('TypeError: Stickers must be an array.');
        this.stickers = stickers1;
        return this;
    }

    /**
     * The flags to add to the message
     * @default null
     * @param {number} flags The flags
     * @returns {object} this
     * @access public
     * @throws {TypeError} If flags is not a number or null
     */
    setFlags(flags) {
        const flags1 = flags ?? null;
        if(typeof flags1 != 'number' && flags != null) throw new Error('TypeError: Flags must be a number or array');
        this.flags = flags1;
        return this;
    }
}

module.exports = MessageBuilder