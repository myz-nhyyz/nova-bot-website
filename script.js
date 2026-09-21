/* ============================================
   Nova — Core JavaScript
   iOS 27 Liquid Glass — Full Interactive System
   ============================================ */

/* ---------- Configuration ---------- */
const CONFIG = {
    BOT_NAME: "Nova",
    BOT_OWNER: "nova_.inovation",
    BOT_AVATAR: "./assets/avatar.png",
    BOT_FAVICON: "./assets/favicon.png",
    BOT_INVITE_URL: "https://discord.com/oauth2/authorize?client_id=1532745879944036523",
    CONTACT_EMAIL: "anhbao27072011@gmail.com",
    SUPPORT_SERVER_URL: "https://discord.gg/qkyu3G6WMa",
    AI_PROVIDER: "Qwen3.7-max",
    EFFECTIVE_DATE: "19/09/2026",
    EFFECTIVE_DATE_EN: "September 19, 2026"
};

/* ---------- Feature Data ---------- */
const FEATURES = {
    ai: {
        id: 'ai',
        icon: '🤖',
        icon_simple: 'AI',
        catKey: 'cat.ai',
        descKey: 'cat.ai.desc',
        features: [
            {
                id: 'ai-chat',
                nameKey: 'feat.ai.chat',
                descKey: 'feat.ai.chat.desc',
                icon: '💬',
                commands: ['/chat', '!chat'],
                permission: null,
                example: '/chat prompt: Hello Nova, tell me about space',
                notesKey: 'feat.ai.chat.notes',
                related: ['ai-image', 'ai-fallback']
            },
            {
                id: 'ai-image',
                nameKey: 'feat.ai.image',
                descKey: 'feat.ai.image.desc',
                icon: '🎨',
                commands: ['/image', '!image'],
                permission: null,
                example: '/image prompt: anime girl under a blue moon',
                notesKey: null,
                related: ['ai-chat']
            },
            {
                id: 'ai-fallback',
                nameKey: 'feat.ai.fallback',
                descKey: 'feat.ai.fallback.desc',
                icon: '🔄',
                commands: [],
                permission: null,
                example: null,
                notesKey: 'feat.ai.fallback.notes',
                related: ['ai-chat', 'ai-image']
            }
        ]
    },
    moderation: {
        id: 'moderation',
        icon: '🛡️',
        icon_simple: 'MOD',
        catKey: 'cat.moderation',
        descKey: 'cat.moderation.desc',
        features: [
            {
                id: 'ban',
                nameKey: 'feat.mod.ban',
                descKey: 'feat.mod.ban.desc',
                icon: '🚫',
                commands: ['/ban'],
                permission: 'perm.mod',
                example: '/ban user:@troublemaker reason: Spamming',
                notesKey: 'feat.mod.ban.notes',
                related: ['unban', 'mute']
            },
            {
                id: 'unban',
                nameKey: 'feat.mod.unban',
                descKey: 'feat.mod.unban.desc',
                icon: '✅',
                commands: ['/unban'],
                permission: 'perm.mod',
                example: '/unban user:123456789',
                notesKey: null,
                related: ['ban']
            },
            {
                id: 'mute',
                nameKey: 'feat.mod.mute',
                descKey: 'feat.mod.mute.desc',
                icon: '🔇',
                commands: ['/mute'],
                permission: 'perm.mod',
                example: '/mute user:@spammer duration:1h reason: Flood',
                notesKey: 'feat.mod.mute.notes',
                related: ['unmute', 'ban']
            },
            {
                id: 'unmute',
                nameKey: 'feat.mod.unmute',
                descKey: 'feat.mod.unmute.desc',
                icon: '🔊',
                commands: ['/unmute'],
                permission: 'perm.mod',
                example: '/unmute user:@user',
                notesKey: null,
                related: ['mute']
            }
        ]
    },
    banzone: {
        id: 'banzone',
        icon: '☠️',
        icon_simple: 'BZ',
        catKey: 'cat.banzone',
        descKey: 'cat.banzone.desc',
        features: [
            {
                id: 'banzone-cmd',
                nameKey: 'feat.bz.bz',
                descKey: 'feat.bz.bz.desc',
                icon: '⚙️',
                commands: ['/banzone'],
                permission: 'perm.owner',
                example: '/banzone mode:Ban',
                notesKey: 'feat.bz.bz.notes',
                related: ['setbanchannel', 'banwhitelist', 'bandebug']
            },
            {
                id: 'setbanchannel',
                nameKey: 'feat.bz.setchannel',
                descKey: 'feat.bz.setchannel.desc',
                icon: '📌',
                commands: ['/setbanchannel'],
                permission: 'perm.owner',
                example: '/setbanchannel channel:#ban-zone',
                notesKey: 'feat.bz.setchannel.notes',
                related: ['banzone-cmd']
            },
            {
                id: 'banwhitelist',
                nameKey: 'feat.bz.whitelist',
                descKey: 'feat.bz.whitelist.desc',
                icon: '📋',
                commands: ['/banwhitelist add', '/banwhitelist remove', '/banwhitelist list'],
                permission: 'perm.owner',
                example: '/banwhitelist add user:@admin',
                notesKey: 'feat.bz.whitelist.notes',
                related: ['banzone-cmd']
            },
            {
                id: 'bandebug',
                nameKey: 'feat.bz.debug',
                descKey: 'feat.bz.debug.desc',
                icon: '🔍',
                commands: ['/bandebug'],
                permission: 'perm.owner',
                example: '/bandebug',
                notesKey: null,
                related: ['banzone-cmd']
            },
            {
                id: 'banzone-protection',
                nameKey: 'feat.bz.protection',
                descKey: 'feat.bz.protection.desc',
                icon: '🛡️',
                commands: [],
                permission: null,
                example: null,
                notesKey: 'feat.bz.protection.notes',
                related: ['setbanchannel']
            },
            {
                id: 'banzone-cleanup',
                nameKey: 'feat.bz.cleanup',
                descKey: 'feat.bz.cleanup.desc',
                icon: '🧹',
                commands: [],
                permission: null,
                example: null,
                notesKey: 'feat.bz.cleanup.notes',
                related: ['banzone-cmd']
            }
        ]
    },
    warbackup: {
        id: 'warbackup',
        icon: '⚔️',
        icon_simple: 'WB',
        catKey: 'cat.warbackup',
        descKey: 'cat.warbackup.desc',
        features: [
            {
                id: 'war',
                nameKey: 'feat.wb.war',
                descKey: 'feat.wb.war.desc',
                icon: '🗡️',
                commands: [],
                permission: null,
                example: null,
                notesKey: null,
                related: ['backup', 'win', 'lose', 'end']
            },
            {
                id: 'backup',
                nameKey: 'feat.wb.backup',
                descKey: 'feat.wb.backup.desc',
                icon: '🛟',
                commands: [],
                permission: null,
                example: null,
                notesKey: null,
                related: ['war', 'win', 'lose', 'end']
            },
            {
                id: 'win',
                nameKey: 'feat.wb.win',
                descKey: 'feat.wb.win.desc',
                icon: '🏆',
                commands: [],
                permission: 'perm.config',
                example: null,
                notesKey: 'feat.wb.buttons.notes',
                related: ['lose', 'end']
            },
            {
                id: 'lose',
                nameKey: 'feat.wb.lose',
                descKey: 'feat.wb.lose.desc',
                icon: '💔',
                commands: [],
                permission: 'perm.config',
                example: null,
                notesKey: 'feat.wb.buttons.notes',
                related: ['win', 'end']
            },
            {
                id: 'end',
                nameKey: 'feat.wb.end',
                descKey: 'feat.wb.end.desc',
                icon: '⏹️',
                commands: [],
                permission: 'perm.config',
                example: null,
                notesKey: 'feat.wb.buttons.notes',
                related: ['win', 'lose', 'endall']
            },
            {
                id: 'endall',
                nameKey: 'feat.wb.endall',
                descKey: 'feat.wb.endall.desc',
                icon: '⏹️',
                commands: ['/end all'],
                permission: 'perm.owner',
                example: '/end all',
                notesKey: null,
                related: ['end']
            },
            {
                id: 'callhacker',
                nameKey: 'feat.wb.callhacker',
                descKey: 'feat.wb.callhacker.desc',
                icon: '👤',
                commands: ['/callhacker show', '/callhacker hide'],
                permission: 'perm.owner',
                example: '/callhacker mode:show',
                notesKey: null,
                related: ['war', 'backup']
            },
            {
                id: 'warbackup-config',
                nameKey: 'feat.wb.config',
                descKey: 'feat.wb.config.desc',
                icon: '⚙️',
                commands: [],
                permission: 'perm.owner',
                example: null,
                notesKey: 'feat.wb.config.notes',
                related: ['war', 'backup']
            }
        ]
    },
    event: {
        id: 'event',
        icon: '🏆',
        icon_simple: 'EV',
        catKey: 'cat.event',
        descKey: 'cat.event.desc',
        features: [
            {
                id: 'event-send',
                nameKey: 'feat.ev.send',
                descKey: 'feat.ev.send.desc',
                icon: '📤',
                commands: ['/event send'],
                permission: 'perm.manager',
                example: '/event send',
                notesKey: null,
                related: ['event-test', 'event-participants']
            },
            {
                id: 'event-test',
                nameKey: 'feat.ev.test',
                descKey: 'feat.ev.test.desc',
                icon: '🧪',
                commands: ['/event test'],
                permission: 'perm.manager',
                example: '/event test',
                notesKey: null,
                related: ['event-send']
            },
            {
                id: 'event-participants',
                nameKey: 'feat.ev.participants',
                descKey: 'feat.ev.participants.desc',
                icon: '👥',
                commands: ['/event participants'],
                permission: 'perm.manager',
                example: '/event participants',
                notesKey: null,
                related: ['event-count', 'event-remove']
            },
            {
                id: 'event-count',
                nameKey: 'feat.ev.count',
                descKey: 'feat.ev.count.desc',
                icon: '🔢',
                commands: ['/event count'],
                permission: 'perm.manager',
                example: '/event count',
                notesKey: null,
                related: ['event-participants']
            },
            {
                id: 'event-remove',
                nameKey: 'feat.ev.remove',
                descKey: 'feat.ev.remove.desc',
                icon: '➖',
                commands: ['/event remove'],
                permission: 'perm.manager',
                example: '/event remove user:@player',
                notesKey: null,
                related: ['event-participants', 'event-clear']
            },
            {
                id: 'event-clear',
                nameKey: 'feat.ev.clear',
                descKey: 'feat.ev.clear.desc',
                icon: '🗑️',
                commands: ['/event clear'],
                permission: 'perm.manager',
                example: '/event clear',
                notesKey: null,
                related: ['event-remove']
            },
            {
                id: 'event-blacklist',
                nameKey: 'feat.ev.blacklist',
                descKey: 'feat.ev.blacklist.desc',
                icon: '⛔',
                commands: ['/event blacklist'],
                permission: 'perm.manager',
                example: '/event blacklist add user:@griefer',
                notesKey: null,
                related: ['event-send']
            }
        ]
    },
    serverinfo: {
        id: 'serverinfo',
        icon: 'ℹ️',
        icon_simple: 'SI',
        catKey: 'cat.serverinfo',
        descKey: 'cat.serverinfo.desc',
        features: [
            {
                id: 'info',
                nameKey: 'feat.si.info',
                descKey: 'feat.si.info.desc',
                icon: '🤖',
                commands: ['/info'],
                permission: null,
                example: '/info',
                notesKey: null,
                related: ['serverinfo', 'userinfo']
            },
            {
                id: 'serverinfo',
                nameKey: 'feat.si.serverinfo',
                descKey: 'feat.si.serverinfo.desc',
                icon: '🖥️',
                commands: ['/serverinfo'],
                permission: null,
                example: '/serverinfo',
                notesKey: null,
                related: ['info', 'userinfo']
            },
            {
                id: 'userinfo',
                nameKey: 'feat.si.userinfo',
                descKey: 'feat.si.userinfo.desc',
                icon: '👤',
                commands: ['/userinfo'],
                permission: null,
                example: '/userinfo user:@member',
                notesKey: null,
                related: ['info', 'serverinfo']
            }
        ]
    },
    configuration: {
        id: 'configuration',
        icon: '🔐',
        icon_simple: 'CFG',
        catKey: 'cat.config',
        descKey: 'cat.config.desc',
        features: [
            {
                id: 'config-view',
                nameKey: 'feat.cfg.view',
                descKey: 'feat.cfg.view.desc',
                icon: '👁️',
                commands: ['/config view'],
                permission: 'perm.owner',
                example: '/config view',
                notesKey: null,
                related: ['config-helpchannel', 'config-warping']
            },
            {
                id: 'config-helpchannel',
                nameKey: 'feat.cfg.helpchannel',
                descKey: 'feat.cfg.helpchannel.desc',
                icon: '❓',
                commands: ['/config help_channel'],
                permission: 'perm.owner',
                example: '/config help_channel channel:#help',
                notesKey: null,
                related: ['config-view']
            },
            {
                id: 'config-warping',
                nameKey: 'feat.cfg.warping',
                descKey: 'feat.cfg.warping.desc',
                icon: '⚔️',
                commands: ['/config war_ping_role'],
                permission: 'perm.owner',
                example: '/config war_ping_role role:@Warriors',
                notesKey: null,
                related: ['config-backuping', 'config-joinedwar']
            },
            {
                id: 'config-backuping',
                nameKey: 'feat.cfg.backuping',
                descKey: 'feat.cfg.backuping.desc',
                icon: '🛟',
                commands: ['/config backup_ping_role'],
                permission: 'perm.owner',
                example: '/config backup_ping_role role:@Backup',
                notesKey: null,
                related: ['config-warping']
            },
            {
                id: 'config-joinedwar',
                nameKey: 'feat.cfg.joinedwar',
                descKey: 'feat.cfg.joinedwar.desc',
                icon: '✅',
                commands: ['/config joined_war_role'],
                permission: 'perm.owner',
                example: '/config joined_war_role role:@In War',
                notesKey: null,
                related: ['config-warping', 'config-joinedbackup']
            },
            {
                id: 'config-joinedbackup',
                nameKey: 'feat.cfg.joinedbackup',
                descKey: 'feat.cfg.joinedbackup.desc',
                icon: '✅',
                commands: ['/config joined_backup_role'],
                permission: 'perm.owner',
                example: '/config joined_backup_role role:@In Backup',
                notesKey: null,
                related: ['config-backuping', 'config-joinedwar']
            },
            {
                id: 'config-hacker',
                nameKey: 'feat.cfg.hacker',
                descKey: 'feat.cfg.hacker.desc',
                icon: '👤',
                commands: ['/config hacker_role'],
                permission: 'perm.owner',
                example: '/config hacker_role role:@Hacker',
                notesKey: 'feat.cfg.server.notes',
                related: ['config-warping']
            }
        ]
    },
    helpsystem: {
        id: 'helpsystem',
        icon: '❓',
        icon_simple: 'HP',
        catKey: 'cat.help',
        descKey: 'cat.help.desc',
        features: [
            {
                id: 'help-main',
                nameKey: 'feat.hp.main',
                descKey: 'feat.hp.main.desc',
                icon: '📖',
                commands: ['!help'],
                permission: null,
                example: '!help',
                notesKey: 'feat.hp.main.notes',
                related: ['help-feature']
            },
            {
                id: 'help-feature',
                nameKey: 'feat.hp.feature',
                descKey: 'feat.hp.feature.desc',
                icon: '🔍',
                commands: ['!help <feature>'],
                permission: null,
                example: '!help chat\n!help ban\n!help banzone',
                notesKey: null,
                related: ['help-main']
            }
        ]
    }
};

const CATEGORY_ORDER = ['ai', 'moderation', 'banzone', 'warbackup', 'event', 'serverinfo', 'configuration', 'helpsystem'];

/* ---------- Command Directory Data ---------- */
const COMMAND_DIRECTORY = [
    // AI
    { cmd: '/chat', descKey: 'cmd.chat', cat: 'ai', catKey: 'cat.ai', perm: null },
    { cmd: '/image', descKey: 'cmd.image', cat: 'ai', catKey: 'cat.ai', perm: null },
    { cmd: '!chat', descKey: 'cmd.chat', cat: 'ai', catKey: 'cat.ai', perm: null },
    { cmd: '!image', descKey: 'cmd.image', cat: 'ai', catKey: 'cat.ai', perm: null },
    // Moderation
    { cmd: '/ban', descKey: 'cmd.ban', cat: 'moderation', catKey: 'cat.moderation', perm: 'perm.mod' },
    { cmd: '/unban', descKey: 'cmd.unban', cat: 'moderation', catKey: 'cat.moderation', perm: 'perm.mod' },
    { cmd: '/mute', descKey: 'cmd.mute', cat: 'moderation', catKey: 'cat.moderation', perm: 'perm.mod' },
    { cmd: '/unmute', descKey: 'cmd.unmute', cat: 'moderation', catKey: 'cat.moderation', perm: 'perm.mod' },
    // Ban Zone
    { cmd: '/banzone', descKey: 'cmd.banzone', cat: 'banzone', catKey: 'cat.banzone', perm: 'perm.owner' },
    { cmd: '/setbanchannel', descKey: 'cmd.setbanchannel', cat: 'banzone', catKey: 'cat.banzone', perm: 'perm.owner' },
    { cmd: '/banwhitelist', descKey: 'cmd.banwhitelist', cat: 'banzone', catKey: 'cat.banzone', perm: 'perm.owner' },
    { cmd: '/bandebug', descKey: 'cmd.bandebug', cat: 'banzone', catKey: 'cat.banzone', perm: 'perm.owner' },
    // War / Backup
    { cmd: 'War', descKey: 'cmd.war', cat: 'warbackup', catKey: 'cat.warbackup', perm: null },
    { cmd: 'Backup', descKey: 'cmd.backup', cat: 'warbackup', catKey: 'cat.warbackup', perm: null },
    { cmd: 'Win', descKey: 'cmd.win', cat: 'warbackup', catKey: 'cat.warbackup', perm: 'perm.config' },
    { cmd: 'Lose', descKey: 'cmd.lose', cat: 'warbackup', catKey: 'cat.warbackup', perm: 'perm.config' },
    { cmd: 'End', descKey: 'cmd.end', cat: 'warbackup', catKey: 'cat.warbackup', perm: 'perm.config' },
    { cmd: '/end all', descKey: 'cmd.endall', cat: 'warbackup', catKey: 'cat.warbackup', perm: 'perm.owner' },
    { cmd: '/callhacker', descKey: 'cmd.callhacker', cat: 'warbackup', catKey: 'cat.warbackup', perm: 'perm.owner' },
    // Event
    { cmd: '/event send', descKey: 'cmd.evsend', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    { cmd: '/event test', descKey: 'cmd.evtest', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    { cmd: '/event participants', descKey: 'cmd.evparticipants', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    { cmd: '/event count', descKey: 'cmd.evcount', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    { cmd: '/event remove', descKey: 'cmd.evremove', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    { cmd: '/event clear', descKey: 'cmd.evclear', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    { cmd: '/event blacklist', descKey: 'cmd.evblacklist', cat: 'event', catKey: 'cat.event', perm: 'perm.manager' },
    // Server Information
    { cmd: '/info', descKey: 'cmd.info', cat: 'serverinfo', catKey: 'cat.serverinfo', perm: null },
    { cmd: '/serverinfo', descKey: 'cmd.serverinfo', cat: 'serverinfo', catKey: 'cat.serverinfo', perm: null },
    { cmd: '/userinfo', descKey: 'cmd.userinfo', cat: 'serverinfo', catKey: 'cat.serverinfo', perm: null },
    // Configuration
    { cmd: '/config view', descKey: 'cmd.cfgview', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    { cmd: '/config help_channel', descKey: 'cmd.cfghelp', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    { cmd: '/config war_ping_role', descKey: 'cmd.cfgwar', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    { cmd: '/config backup_ping_role', descKey: 'cmd.cfgbackup', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    { cmd: '/config joined_war_role', descKey: 'cmd.cfgjwar', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    { cmd: '/config joined_backup_role', descKey: 'cmd.cfgjbackup', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    { cmd: '/config hacker_role', descKey: 'cmd.cfghacker', cat: 'configuration', catKey: 'cat.config', perm: 'perm.owner' },
    // Help
    { cmd: '/help', descKey: 'cmd.help', cat: 'helpsystem', catKey: 'cat.help', perm: null },
    { cmd: '!help', descKey: 'cmd.help', cat: 'helpsystem', catKey: 'cat.help', perm: null },
    { cmd: '!help <feature>', descKey: 'cmd.helpfeature', cat: 'helpsystem', catKey: 'cat.help', perm: null }
];

/* ---------- Translations ---------- */
const T = {
    vi: {
        /* Nav */
        'nav.home': 'Trang chủ',
        'nav.features': 'Tính năng',
        'nav.commands': 'Lệnh',
        'nav.ai': 'AI',
        'nav.moderation': 'Moderation',
        'nav.warbackup': 'War / Backup',
        'nav.event': 'Event',
        'nav.help': 'Help',
        'nav.privacy': 'Chính sách',
        'nav.terms': 'Điều khoản',
        'nav.invite': 'Mời Nova',

        /* Mobile menu sections */
        'mobile.main': 'Điều hướng',
        'mobile.legal': 'Pháp lý',

        /* Hero */
        'hero.tagline': 'Trợ lý thông minh cho Discord.',
        'hero.desc': 'Nova cung cấp AI conversation, tạo hình ảnh AI, tiện ích server, moderation, Ban Zone, công cụ War / Backup ping, Event, thông tin server và các tiện ích Discord có thể cấu hình.',
        'hero.invite': 'Mời Nova',
        'hero.support': 'Tham gia Support Server',
        'hero.explore': 'Khám phá tính năng',
        'hero.pill.ai': 'AI Chat',
        'hero.pill.image': 'AI Image',
        'hero.pill.mod': 'Moderation',
        'hero.pill.bz': 'Ban Zone',
        'hero.pill.wb': 'War / Backup',
        'hero.pill.ev': 'Event',
        'hero.pill.info': 'Server Info',
        'hero.pill.cfg': 'Cấu hình',

        /* Sections */
        'sec.features.eyebrow': 'Tính năng',
        'sec.features.title': 'Khám phá Nova',
        'sec.features.subtitle': 'Chọn một danh mục để xem chi tiết các tính năng.',
        'sec.commands.eyebrow': 'Tài liệu',
        'sec.commands.title': 'Danh sách lệnh',
        'sec.commands.subtitle': 'Tất cả các lệnh của Nova được phân loại theo danh mục.',
        'sec.search.placeholder': 'Tìm kiếm lệnh hoặc tính năng...',
        'sec.search.empty': 'Không tìm thấy kết quả phù hợp.',
        'sec.help.eyebrow': 'Trợ giúp',
        'sec.help.title': 'Help Menu tương tác',
        'sec.help.subtitle': 'Trải nghiệm Help Menu của Nova với danh mục và dropdown.',
        'sec.cta.title': 'Sẵn sàng dùng Nova?',
        'sec.cta.subtitle': 'Mời Nova vào server của bạn hoặc tham gia cộng đồng hỗ trợ.',
        'sec.cta.invite': 'Mời Nova',
        'sec.cta.support': 'Tham gia Support Server',
        'sec.contact.eyebrow': 'Liên hệ',
        'sec.contact.title': 'Kết nối',
        'sec.contact.subtitle': 'Có câu hỏi? Chúng tôi luôn lắng nghe.',
        'contact.email': 'Email',
        'contact.owner': 'Bot Owner',

        /* Categories */
        'cat.ai': 'AI',
        'cat.ai.desc': 'Trò chuyện và tạo hình ảnh với AI.',
        'cat.moderation': 'Moderation',
        'cat.moderation.desc': 'Công cụ quản lý server.',
        'cat.banzone': 'Ban Zone',
        'cat.banzone.desc': 'Hệ thống bảo vệ và moderation riêng cho server.',
        'cat.warbackup': 'War / Backup',
        'cat.warbackup.desc': 'Điều phối War và Backup với ping, roles và permissions.',
        'cat.event': 'Event',
        'cat.event.desc': 'Tạo và quản lý event cộng đồng.',
        'cat.serverinfo': 'Server Information',
        'cat.serverinfo.desc': 'Xem thông tin về bot, server và người dùng.',
        'cat.config': 'Configuration',
        'cat.config.desc': 'Cấu hình các tính năng của Nova cho server của bạn.',
        'cat.help': 'Help System',
        'cat.help.desc': 'Hệ thống Help Menu tương tác với danh mục.',

        /* Features: AI */
        'feat.ai.chat': 'AI Chat',
        'feat.ai.chat.desc': 'Nova cung cấp các cuộc trò chuyện được hỗ trợ bởi AI ngay trong Discord. Người dùng có thể trò chuyện tự nhiên với Nova và nhận phản hồi được tạo bởi AI.',
        'feat.ai.chat.notes': 'Hỗ trợ Persona, lịch sử chia sẻ, cấu hình AI.',
        'feat.ai.image': 'AI Image Generation',
        'feat.ai.image.desc': 'Nova có thể tạo hình ảnh từ mô tả văn bản. Người dùng nhập prompt mô tả hình ảnh mong muốn.',
        'feat.ai.fallback': 'AI Fallback',
        'feat.ai.fallback.desc': 'Nova sử dụng dịch vụ AI chính và có hệ thống AI dự phòng khi dịch vụ chính không khả dụng.',
        'feat.ai.fallback.notes': 'AI provider/model công khai: ' + CONFIG.AI_PROVIDER + '. Không tiết lộ API keys hay thông tin xác thực riêng tư.',

        /* Features: Moderation */
        'feat.mod.ban': 'Ban',
        'feat.mod.ban.desc': 'Cấm một thành viên khỏi server Discord hiện tại.',
        'feat.mod.ban.notes': 'Quyền và thứ bậc vai trò được tôn trọng. Bot không thể ban người dùng có vai trò cao hơn.',
        'feat.mod.unban': 'Unban',
        'feat.mod.unban.desc': 'Xóa người dùng khỏi danh sách cấm của server.',
        'feat.mod.mute': 'Mute',
        'feat.mod.mute.desc': 'Tạm thời timeout một thành viên. Hỗ trợ các khoảng thời gian như 10m, 1h, 1d, 7d.',
        'feat.mod.mute.notes': 'Thời gian tối đa theo giới hạn của Discord.',
        'feat.mod.unmute': 'Unmute',
        'feat.mod.unmute.desc': 'Xóa timeout của thành viên.',

        /* Features: Ban Zone */
        'feat.bz.bz': '/banzone',
        'feat.bz.bz.desc': 'Cấu hình hành động tự động được Ban Zone sử dụng. Các chế độ: Ban, Mute.',
        'feat.bz.bz.notes': 'Ban: xử lý người gửi tin nhắn vào Ban Zone. Mute: Discord timeout.',
        'feat.bz.setchannel': '/setbanchannel',
        'feat.bz.setchannel.desc': 'Đặt kênh được sử dụng cho các hành động / panel của Ban Zone.',
        'feat.bz.setchannel.notes': 'Nếu kênh Ban Zone bị xóa, bot có cơ chế phát hiện và phản hồi theo cấu hình hiện tại và thứ bậc.',
        'feat.bz.whitelist': '/banwhitelist',
        'feat.bz.whitelist.desc': 'Quản lý Ban Zone whitelist. Các lệnh phụ: add, remove, list.',
        'feat.bz.whitelist.notes': 'Chỉ Server Owner mới có thể quản lý whitelist. Whitelist độc lập cho mỗi Discord server. Người dùng được whitelist ở Server A KHÔNG tự động được whitelist ở Server B.',
        'feat.bz.debug': '/bandebug',
        'feat.bz.debug.desc': 'Xem / debug hành vi của Ban Zone.',
        'feat.bz.protection': 'Ban Zone Protection',
        'feat.bz.protection.desc': 'Ban Zone có thể giám sát việc xóa kênh được cấu hình và phản hồi với việc xóa trái phép theo thứ bậc của bot và cấu hình server.',
        'feat.bz.protection.notes': 'Không tuyên bố quyền hạn không thể thực hiện được. Hành vi phụ thuộc vào cấu hình server.',
        'feat.bz.cleanup': '24-hour Cleanup',
        'feat.bz.cleanup.desc': 'Ban Zone có thể xóa các tin nhắn gần đây liên quan đến hành động được bảo vệ trong khoảng thời gian cleanup được cấu hình.',
        'feat.bz.cleanup.notes': 'Giữ mô tả dựa trên thực tế, tránh tuyên bố các khả năng của Discord không thực sự có sẵn.',

        /* Features: War / Backup */
        'feat.wb.war': 'War',
        'feat.wb.war.desc': 'Tạo / quản lý phiên War và thông báo thành viên sử dụng vai trò War ping được cấu hình.',
        'feat.wb.backup': 'Backup',
        'feat.wb.backup.desc': 'Tạo / quản lý phiên Backup và thông báo thành viên sử dụng vai trò Backup ping được cấu hình.',
        'feat.wb.win': 'Win',
        'feat.wb.win.desc': 'Kết thúc phiên War/Backup với kết quả Win.',
        'feat.wb.lose': 'Lose',
        'feat.wb.lose.desc': 'Kết thúc phiên War/Backup với kết quả Lose.',
        'feat.wb.end': 'End',
        'feat.wb.end.desc': 'Kết thúc phiên War/Backup đang hoạt động.',
        'feat.wb.buttons.notes': 'Cấu hình server có thể kiểm soát việc thành viên bình thường có được phép sử dụng các nút Win, Lose, End hay không. Nếu bị vô hiệu hóa, chỉ người dùng được phép mới có thể sử dụng chúng theo cấu hình server.',
        'feat.wb.endall': '/end all',
        'feat.wb.endall.desc': 'Kết thúc tất cả các phiên War/Backup đang hoạt động trong server Discord hiện tại.',
        'feat.wb.callhacker': 'Call Hacker',
        'feat.wb.callhacker.desc': 'Hiển thị hoặc ẩn nút Call Hacker trong các panel War/Backup. Các chế độ: show, hide.',
        'feat.wb.config': 'Configuration Roles',
        'feat.wb.config.desc': 'Các vai trò có thể cấu hình cho hệ thống War / Backup.',
        'feat.wb.config.notes': 'War Ping Role, Backup Ping Role, Joined War Role, Joined Backup Role, Hacker Role.',

        /* Features: Event */
        'feat.ev.send': '/event send',
        'feat.ev.send.desc': 'Gửi / tạo panel event.',
        'feat.ev.test': '/event test',
        'feat.ev.test.desc': 'Kiểm tra panel / chức năng event.',
        'feat.ev.participants': '/event participants',
        'feat.ev.participants.desc': 'Xem người tham gia event.',
        'feat.ev.count': '/event count',
        'feat.ev.count.desc': 'Xem số lượng người tham gia.',
        'feat.ev.remove': '/event remove',
        'feat.ev.remove.desc': 'Xóa một người tham gia.',
        'feat.ev.clear': '/event clear',
        'feat.ev.clear.desc': 'Xóa tất cả người tham gia event.',
        'feat.ev.blacklist': '/event blacklist',
        'feat.ev.blacklist.desc': 'Quản lý blacklist event.',

        /* Features: Server Information */
        'feat.si.info': '/info',
        'feat.si.info.desc': 'Hiển thị trạng thái AI/dịch vụ hiện tại của Nova và thông tin cấu hình server liên quan mà người dùng có quyền xem.',
        'feat.si.serverinfo': '/serverinfo',
        'feat.si.serverinfo.desc': 'Hiển thị thông tin về server Discord hiện tại.',
        'feat.si.userinfo': '/userinfo',
        'feat.si.userinfo.desc': 'Hiển thị thông tin về một thành viên / người dùng Discord.',

        /* Features: Configuration */
        'feat.cfg.view': '/config view',
        'feat.cfg.view.desc': 'Xem cấu hình hiện tại.',
        'feat.cfg.helpchannel': '/config help_channel',
        'feat.cfg.helpchannel.desc': 'Cấu hình kênh Help.',
        'feat.cfg.warping': '/config war_ping_role',
        'feat.cfg.warping.desc': 'Cấu hình vai trò War ping.',
        'feat.cfg.backuping': '/config backup_ping_role',
        'feat.cfg.backuping.desc': 'Cấu hình vai trò Backup ping.',
        'feat.cfg.joinedwar': '/config joined_war_role',
        'feat.cfg.joinedwar.desc': 'Cấu hình vai trò được cấp / sử dụng cho các phiên War đã tham gia.',
        'feat.cfg.joinedbackup': '/config joined_backup_role',
        'feat.cfg.joinedbackup.desc': 'Cấu hình vai trò được cấp / sử dụng cho các phiên Backup đã tham gia.',
        'feat.cfg.hacker': '/config hacker_role',
        'feat.cfg.hacker.desc': 'Cấu hình vai trò Hacker.',
        'feat.cfg.server.notes': 'Cấu hình là riêng cho từng server.',

        /* Features: Help System */
        'feat.hp.main': '!help',
        'feat.hp.main.desc': 'Mở menu Categories. Người dùng có thể điều hướng các tính năng mà không nhận được một bức tường văn bản lớn.',
        'feat.hp.main.notes': 'Help Menu sử dụng danh mục và dropdown để điều hướng dễ dàng.',
        'feat.hp.feature': '!help <feature>',
        'feat.hp.feature.desc': 'Chỉ hiển thị hướng dẫn chi tiết của tính năng / lệnh được chọn.',

        /* Permissions */
        'perm.mod': 'Quyền Moderation',
        'perm.owner': 'Server Owner',
        'perm.manager': 'Quyền Manager',
        'perm.config': 'Theo cấu hình server',

        /* Command descriptions */
        'cmd.chat': 'Trò chuyện với AI',
        'cmd.image': 'Tạo hình ảnh bằng AI',
        'cmd.ban': 'Cấm người dùng khỏi server',
        'cmd.unban': 'Bỏ cấm người dùng',
        'cmd.mute': 'Tạm thời timeout người dùng',
        'cmd.unmute': 'Bỏ timeout người dùng',
        'cmd.banzone': 'Cấu hình chế độ Ban Zone',
        'cmd.setbanchannel': 'Đặt kênh Ban Zone',
        'cmd.banwhitelist': 'Quản lý Ban Zone whitelist',
        'cmd.bandebug': 'Debug Ban Zone',
        'cmd.war': 'Tạo phiên War',
        'cmd.backup': 'Tạo phiên Backup',
        'cmd.win': 'Kết thúc với kết quả Win',
        'cmd.lose': 'Kết thúc với kết quả Lose',
        'cmd.end': 'Kết thúc phiên',
        'cmd.endall': 'Kết thúc tất cả War/Backup',
        'cmd.callhacker': 'Hiện/ẩn nút Call Hacker',
        'cmd.evsend': 'Gửi panel event',
        'cmd.evtest': 'Kiểm tra event',
        'cmd.evparticipants': 'Xem người tham gia',
        'cmd.evcount': 'Xem số lượng người tham gia',
        'cmd.evremove': 'Xóa người tham gia',
        'cmd.evclear': 'Xóa tất cả người tham gia',
        'cmd.evblacklist': 'Quản lý blacklist event',
        'cmd.info': 'Thông tin bot và trạng thái',
        'cmd.serverinfo': 'Thông tin server',
        'cmd.userinfo': 'Thông tin người dùng',
        'cmd.cfgview': 'Xem cấu hình',
        'cmd.cfghelp': 'Cấu hình kênh Help',
        'cmd.cfgwar': 'Cấu hình vai trò War ping',
        'cmd.cfgbackup': 'Cấu hình vai trò Backup ping',
        'cmd.cfgjwar': 'Cấu hình vai trò Joined War',
        'cmd.cfgjbackup': 'Cấu hình vai trò Joined Backup',
        'cmd.cfghacker': 'Cấu hình vai trò Hacker',
        'cmd.help': 'Mở Help Menu',
        'cmd.helpfeature': 'Xem trợ giúp của tính năng cụ thể',

        /* Command table */
        'table.cmd': 'Lệnh',
        'table.desc': 'Mô tả',
        'table.cat': 'Danh mục',
        'table.perm': 'Quyền',
        'perm.none': 'Không yêu cầu',

        /* Help Menu */
        'help.header': 'Nova Help Menu',
        'help.section': 'Help Menu',
        'help.desc': 'Đây là Help Menu của Nova. Sử dụng danh sách bên dưới để xem danh mục bạn muốn.',
        'help.categories': 'Danh mục',
        'help.tip': 'Mẹo: Chọn một danh mục bên dưới để xem chi tiết.',
        'help.placeholder': 'Chọn một danh mục',
        'help.content.ai': 'AI Chat, AI Image Generation, AI Fallback. Sử dụng !help để xem chi tiết.',
        'help.content.moderation': 'Ban, Unban, Mute, Unmute. Các hành động moderation tôn trọng quyền Discord.',
        'help.content.banzone': '/banzone, /setbanchannel, /banwhitelist, /bandebug. Chỉ Server Owner quản lý whitelist.',
        'help.content.warbackup': 'War, Backup, Win, Lose, End, /end all, /callhacker. Quyền nút có thể cấu hình.',
        'help.content.event': '/event send, /event test, /event participants, /event count, /event remove, /event clear, /event blacklist.',
        'help.content.serverinfo': '/info, /serverinfo, /userinfo. Xem thông tin bot, server và người dùng.',
        'help.content.configuration': '/config view, /config help_channel, /config war_ping_role, /config backup_ping_role, /config joined_war_role, /config joined_backup_role, /config hacker_role.',
        'help.content.helpsystem': '!help mở danh mục. !help <feature> xem chi tiết. Ví dụ: !help chat, !help ban.',

        /* Modal */
        'modal.desc': 'Mô tả',
        'modal.cmds': 'Lệnh',
        'modal.example': 'Ví dụ',
        'modal.perm': 'Quyền yêu cầu',
        'modal.notes': 'Lưu ý',
        'modal.related': 'Liên quan',
        'modal.close': 'Đóng',

        /* Footer */
        'footer.tagline': 'AI-powered Discord bot',
        'footer.owner': 'Bot Owner: ' + CONFIG.BOT_OWNER,
        'footer.col.nav': 'Điều hướng',
        'footer.col.community': 'Cộng đồng',
        'footer.col.contact': 'Liên hệ',
        'footer.link.home': 'Trang chủ',
        'footer.link.features': 'Tính năng',
        'footer.link.commands': 'Lệnh',
        'footer.link.privacy': 'Chính sách bảo mật',
        'footer.link.terms': 'Điều khoản dịch vụ',
        'footer.link.support': 'Support Server',
        'footer.invite': 'Mời Nova',
        'footer.support': 'Tham gia Support Server',
        'footer.copyright': '© 2026 Nova. Đã đăng ký bản quyền.',

        /* Privacy */
        'privacy.badge': 'Chính sách bảo mật',
        'privacy.title': 'Chính sách bảo mật',
        'privacy.effective': 'Có hiệu lực từ: ' + CONFIG.EFFECTIVE_DATE,
        'privacy.s1.title': 'Giới thiệu',
        'privacy.s1.text': 'Chính sách bảo mật này giải thích cách Nova thu thập, sử dụng và xử lý thông tin khi bạn sử dụng bot Discord của chúng tôi. Bằng cách sử dụng Nova, bạn đồng ý với các thực tiễn được mô tả trong chính sách này.',
        'privacy.s2.title': 'Thông tin có thể được xử lý',
        'privacy.s2.text': 'Nova có thể xử lý các loại thông tin sau khi cần thiết cho chức năng của bot:',
        'privacy.s2.items': [
            'ID người dùng và ID server Discord khi cần thiết cho chức năng bot',
            'Dữ liệu tương tác lệnh khi được yêu cầu',
            'Dữ liệu cấu hình server',
            'Dữ liệu tương tác AI',
            'Dữ liệu liên quan đến moderation khi cần thiết cho chức năng'
        ],
        'privacy.s3.title': 'Cách thông tin được sử dụng',
        'privacy.s3.text': 'Thông tin được sử dụng độc lập cho mỗi server Discord để cung cấp, duy trì và cải thiện các tính năng của Nova bao gồm AI, moderation, Ban Zone, War / Backup, Event và các tiện ích server. Dữ liệu cấu hình được lưu riêng cho từng server.',
        'privacy.s4.title': 'Nguyên tắc lưu trữ dữ liệu',
        'privacy.s4.text': 'Dữ liệu được lưu trữ trong khoảng thời gian cần thiết để cung cấp dịch vụ. Các nguyên tắc lưu trữ cụ thể phụ thuộc vào cấu hình triển khai và loại dữ liệu. Cấu hình server được lưu độc lập cho mỗi Discord server.',
        'privacy.s5.title': 'Bảo mật',
        'privacy.s5.text': 'Các biện pháp bảo mật hợp lý được thực hiện để bảo vệ dữ liệu. Không có phương thức truyền tải hoặc lưu trữ nào hoàn toàn an toàn. Thông tin chi tiết về mã hóa hoặc cơ sở hạ tầng không được công khai công bố.',
        'privacy.s6.title': 'Dịch vụ bên thứ ba',
        'privacy.s6.text': 'Nova tích hợp với Discord API và nhà cung cấp AI (' + CONFIG.AI_PROVIDER + '). Việc sử dụng các dịch vụ này được quản lý bởi chính sách bảo mật của từng nhà cung cấp tương ứng.',
        'privacy.s7.title': 'Quyền của người dùng và liên hệ',
        'privacy.s7.text': 'Nếu bạn có câu hỏi về việc xử lý dữ liệu, muốn yêu cầu xem xét dữ liệu của mình hoặc có bất kỳ mối quan tâm nào về bảo mật, vui lòng liên hệ qua các kênh được cung cấp bên dưới.',
        'privacy.contact.title': 'Thông tin liên hệ',
        'privacy.contact.owner': 'Bot Owner: ' + CONFIG.BOT_OWNER,
        'privacy.contact.email': 'Email: ' + CONFIG.CONTACT_EMAIL,
        'privacy.contact.support': 'Support Server: ' + CONFIG.SUPPORT_SERVER_URL,

        /* Terms */
        'terms.badge': 'Điều khoản dịch vụ',
        'terms.title': 'Điều khoản dịch vụ',
        'terms.effective': 'Có hiệu lực từ: ' + CONFIG.EFFECTIVE_DATE,
        'terms.disclaimer': 'Nova là Discord bot bên thứ ba và không phải sản phẩm chính thức của Discord.',
        'terms.s1.title': 'Giới thiệu',
        'terms.s1.text': 'Điều khoản dịch vụ này quản lý việc bạn sử dụng bot Discord Nova. Bằng cách sử dụng Nova, bạn đồng ý tuân thủ các điều khoản này.',
        'terms.s2.title': 'Chấp nhận điều khoản',
        'terms.s2.text': 'Bằng cách thêm Nova vào server Discord của bạn hoặc sử dụng bất kỳ lệnh nào của bot, bạn xác nhận rằng đã đọc, hiểu và đồng ý với các điều khoản này. Nếu bạn không đồng ý, vui lòng không sử dụng Nova.',
        'terms.s3.title': 'Sử dụng có thể chấp nhận',
        'terms.s3.text': 'Bạn đồng ý sử dụng Nova chỉ cho các mục đích hợp pháp và tuân thủ Điều khoản Dịch vụ của Discord. Bạn không được sử dụng Nova để gửi thư rác, lạm dụng, hoặc thực hiện các hành vi gây hại cho người dùng khác.',
        'terms.s4.title': 'Lạm dụng bị cấm',
        'terms.s4.text': 'Người dùng có trách nhiệm đối với nội dung họ gửi thông qua Nova. Bạn không được sử dụng Nova để truyền tải nội dung xúc phạm, đe dọa, khiêu dâm, vi phạm bản quyền hoặc trái pháp luật. Việc cố tình lạm dụng tính năng AI, moderation, Ban Zone hoặc War/Backup có thể dẫn đến việc bị chấm dứt quyền truy cập.',
        'terms.s5.title': 'Yêu cầu quyền Discord',
        'terms.s5.text': 'Nova yêu cầu các quyền Discord cần thiết để hoạt động. Các hành động moderation và cấu hình tôn trọng thứ bậc vai trò Discord và quyền của người dùng. Bot không thể thực hiện các hành động vượt quá quyền của nó trong server.',
        'terms.s6.title': 'Giới hạn tính năng AI',
        'terms.s6.text': 'Tính năng AI sử dụng ' + CONFIG.AI_PROVIDER + '. Chúng tôi không đảm bảo rằng nội dung do AI tạo ra luôn chính xác, hoàn chỉnh hoặc phù hợp. Sử dụng thông tin từ AI theo trách nhiệm của riêng bạn. Dịch vụ AI có thể không khả dụng vào lúc này.',
        'terms.s7.title': 'Giới hạn tính năng Moderation',
        'terms.s7.text': 'Các tính năng moderation được cung cấp để hỗ trợ quản lý server. Chúng tôi không đảm bảo rằng mọi hành động moderation đều thành công hoặc phù hợp trong mọi tình huống. Quản trị viên server có trách nhiệm giám sát và điều chỉnh.',
        'terms.s8.title': 'Tính khả dụng',
        'terms.s8.text': 'Chúng tôi không đảm bảo rằng Nova sẽ hoạt động không gián đoạn hoặc không có lỗi. Dịch vụ có thể bị gián đoạn do bảo trì, cập nhật, hoặc sự cố bên thứ ba ngoài tầm kiểm soát của chúng tôi.',
        'terms.s9.title': 'Thay đổi dịch vụ',
        'terms.s9.text': 'Chúng tôi có quyền cập nhật, sửa đổi hoặc loại bỏ tính năng của Nova bất cứ lúc nào. Chúng tôi sẽ cố gắng thông báo trước về các thay đổi quan trọng khi có thể.',
        'terms.s10.title': 'Chấm dứt',
        'terms.s10.text': 'Chúng tôi có quyền tạm ngừng hoặc chấm dứt quyền truy cập Nova của bạn nếu bạn vi phạm các điều khoản này. Bạn có thể ngừng sử dụng Nova bất cứ lúc nào bằng cách xóa bot khỏi server.',
        'terms.s11.title': 'Giới hạn trách nhiệm',
        'terms.s11.text': 'Trong phạm vi được pháp luật cho phép, Nova và người duy trì không chịu trách nhiệm đối với bất kỳ thiệt hại gián tiếp, ngẫu nhiên, đặc biệt, hệ quả hoặc trừng phạt nào phát sinh từ việc sử dụng hoặc không thể sử dụng bot.',
        'terms.s12.title': 'Liên hệ',
        'terms.s12.text': 'Nếu bạn có câu hỏi về các điều khoản này, vui lòng liên hệ:',
        'terms.contact.owner': 'Bot Owner: ' + CONFIG.BOT_OWNER,
        'terms.contact.email': 'Email: ' + CONFIG.CONTACT_EMAIL,
        'terms.contact.support': 'Support Server: ' + CONFIG.SUPPORT_SERVER_URL,

        /* Common */
        'common.or': 'hoặc'
    },
    en: {
        /* Nav */
        'nav.home': 'Home',
        'nav.features': 'Features',
        'nav.commands': 'Commands',
        'nav.ai': 'AI',
        'nav.moderation': 'Moderation',
        'nav.warbackup': 'War / Backup',
        'nav.event': 'Event',
        'nav.help': 'Help',
        'nav.privacy': 'Privacy',
        'nav.terms': 'Terms',
        'nav.invite': 'Invite Nova',

        /* Mobile menu sections */
        'mobile.main': 'Navigation',
        'mobile.legal': 'Legal',

        /* Hero */
        'hero.tagline': 'Your intelligent Discord companion.',
        'hero.desc': 'Nova provides AI conversation, AI image generation, server utilities, moderation, Ban Zone, War / Backup ping tools, events, server information and configurable Discord utilities.',
        'hero.invite': 'Invite Nova',
        'hero.support': 'Join Support Server',
        'hero.explore': 'Explore Features',
        'hero.pill.ai': 'AI Chat',
        'hero.pill.image': 'AI Image',
        'hero.pill.mod': 'Moderation',
        'hero.pill.bz': 'Ban Zone',
        'hero.pill.wb': 'War / Backup',
        'hero.pill.ev': 'Event',
        'hero.pill.info': 'Server Info',
        'hero.pill.cfg': 'Configuration',

        /* Sections */
        'sec.features.eyebrow': 'Features',
        'sec.features.title': 'Explore Nova',
        'sec.features.subtitle': 'Select a category to view detailed features.',
        'sec.commands.eyebrow': 'Reference',
        'sec.commands.title': 'Command Directory',
        'sec.commands.subtitle': 'All Nova commands organized by category.',
        'sec.search.placeholder': 'Search commands or features...',
        'sec.search.empty': 'No matching results found.',
        'sec.help.eyebrow': 'Help',
        'sec.help.title': 'Interactive Help Menu',
        'sec.help.subtitle': 'Experience Nova\'s Help Menu with categories and dropdown.',
        'sec.cta.title': 'Ready to use Nova?',
        'sec.cta.subtitle': 'Invite Nova to your server or join the support community.',
        'sec.cta.invite': 'Invite Nova',
        'sec.cta.support': 'Join Support Server',
        'sec.contact.eyebrow': 'Contact',
        'sec.contact.title': 'Get in touch',
        'sec.contact.subtitle': 'Have questions? We\'d love to hear from you.',
        'contact.email': 'Email',
        'contact.owner': 'Bot Owner',

        /* Categories */
        'cat.ai': 'AI',
        'cat.ai.desc': 'Chat and generate images with AI.',
        'cat.moderation': 'Moderation',
        'cat.moderation.desc': 'Server management tools.',
        'cat.banzone': 'Ban Zone',
        'cat.banzone.desc': 'Server-specific protection and moderation system.',
        'cat.warbackup': 'War / Backup',
        'cat.warbackup.desc': 'Coordinate War and Backup with pings, roles and permissions.',
        'cat.event': 'Event',
        'cat.event.desc': 'Create and manage community events.',
        'cat.serverinfo': 'Server Information',
        'cat.serverinfo.desc': 'View information about the bot, server and users.',
        'cat.config': 'Configuration',
        'cat.config.desc': 'Configure Nova features for your server.',
        'cat.help': 'Help System',
        'cat.help.desc': 'Interactive Help Menu system with categories.',

        /* Features: AI */
        'feat.ai.chat': 'AI Chat',
        'feat.ai.chat.desc': 'Nova can provide AI-powered conversations inside Discord. Users can chat naturally with Nova and receive AI-generated responses.',
        'feat.ai.chat.notes': 'Supports Persona, shared history, AI configuration.',
        'feat.ai.image': 'AI Image Generation',
        'feat.ai.image.desc': 'Nova can generate images from text prompts. Users enter a prompt describing the desired image.',
        'feat.ai.fallback': 'AI Fallback',
        'feat.ai.fallback.desc': 'Nova uses its primary AI service and has a fallback AI system when the primary service is unavailable.',
        'feat.ai.fallback.notes': 'Public AI provider/model: ' + CONFIG.AI_PROVIDER + '. Private API keys or credentials are not exposed.',

        /* Features: Moderation */
        'feat.mod.ban': 'Ban',
        'feat.mod.ban.desc': 'Ban a member from the current Discord server.',
        'feat.mod.ban.notes': 'Permissions and role hierarchy are respected. Bot cannot ban users with higher roles.',
        'feat.mod.unban': 'Unban',
        'feat.mod.unban.desc': 'Remove a user from the server ban list.',
        'feat.mod.mute': 'Mute',
        'feat.mod.mute.desc': 'Temporarily timeout a member. Supports durations such as 10m, 1h, 1d, 7d.',
        'feat.mod.mute.notes': 'Maximum duration follows Discord limits.',
        'feat.mod.unmute': 'Unmute',
        'feat.mod.unmute.desc': 'Remove the member\'s timeout.',

        /* Features: Ban Zone */
        'feat.bz.bz': '/banzone',
        'feat.bz.bz.desc': 'Configure the automatic action used by Ban Zone. Modes: Ban, Mute.',
        'feat.bz.bz.notes': 'Ban: handles users sending messages into Ban Zone. Mute: Discord timeout.',
        'feat.bz.setchannel': '/setbanchannel',
        'feat.bz.setchannel.desc': 'Set the channel used for Ban Zone actions/panel.',
        'feat.bz.setchannel.notes': 'If the Ban Zone channel is deleted, the bot has mechanisms to detect and react according to current configuration and hierarchy.',
        'feat.bz.whitelist': '/banwhitelist',
        'feat.bz.whitelist.desc': 'Manage the Ban Zone whitelist. Subcommands: add, remove, list.',
        'feat.bz.whitelist.notes': 'Only the Server Owner can manage the whitelist. The whitelist is independent for every Discord server. A user whitelisted in Server A is NOT automatically whitelisted in Server B.',
        'feat.bz.debug': '/bandebug',
        'feat.bz.debug.desc': 'View/debug Ban Zone behavior.',
        'feat.bz.protection': 'Ban Zone Protection',
        'feat.bz.protection.desc': 'Ban Zone can monitor configured channel deletion and react to unauthorized deletion according to the bot\'s hierarchy and server configuration.',
        'feat.bz.protection.notes': 'Does not claim impossible permissions. Behavior depends on server configuration.',
        'feat.bz.cleanup': '24-hour Cleanup',
        'feat.bz.cleanup.desc': 'Ban Zone can remove recent messages associated with the protected action within the configured cleanup window.',
        'feat.bz.cleanup.notes': 'Keep wording factual, avoid claiming Discord capabilities that are not actually available.',

        /* Features: War / Backup */
        'feat.wb.war': 'War',
        'feat.wb.war.desc': 'Create/manage War sessions and notify members using the configured War ping role.',
        'feat.wb.backup': 'Backup',
        'feat.wb.backup.desc': 'Create/manage Backup sessions and notify members using the configured Backup ping role.',
        'feat.wb.win': 'Win',
        'feat.wb.win.desc': 'End a War/Backup session with the Win result.',
        'feat.wb.lose': 'Lose',
        'feat.wb.lose.desc': 'End a War/Backup session with the Lose result.',
        'feat.wb.end': 'End',
        'feat.wb.end.desc': 'End an active War/Backup session.',
        'feat.wb.buttons.notes': 'Server configuration can control whether normal members are allowed to use the Win, Lose, End buttons. If disabled, only permitted users can use them according to the server configuration.',
        'feat.wb.endall': '/end all',
        'feat.wb.endall.desc': 'End all active War/Backup sessions in the current Discord server.',
        'feat.wb.callhacker': 'Call Hacker',
        'feat.wb.callhacker.desc': 'Show or hide the Call Hacker button in War/Backup panels. Modes: show, hide.',
        'feat.wb.config': 'Configuration Roles',
        'feat.wb.config.desc': 'Configurable roles for the War / Backup system.',
        'feat.wb.config.notes': 'War Ping Role, Backup Ping Role, Joined War Role, Joined Backup Role, Hacker Role.',

        /* Features: Event */
        'feat.ev.send': '/event send',
        'feat.ev.send.desc': 'Send/create the event panel.',
        'feat.ev.test': '/event test',
        'feat.ev.test.desc': 'Test the event panel/functionality.',
        'feat.ev.participants': '/event participants',
        'feat.ev.participants.desc': 'View event participants.',
        'feat.ev.count': '/event count',
        'feat.ev.count.desc': 'View participant count.',
        'feat.ev.remove': '/event remove',
        'feat.ev.remove.desc': 'Remove a participant.',
        'feat.ev.clear': '/event clear',
        'feat.ev.clear.desc': 'Clear event participants.',
        'feat.ev.blacklist': '/event blacklist',
        'feat.ev.blacklist.desc': 'Manage event blacklist.',

        /* Features: Server Information */
        'feat.si.info': '/info',
        'feat.si.info.desc': 'Show Nova\'s current AI/service status and relevant server configuration information available to the user.',
        'feat.si.serverinfo': '/serverinfo',
        'feat.si.serverinfo.desc': 'Show information about the current Discord server.',
        'feat.si.userinfo': '/userinfo',
        'feat.si.userinfo.desc': 'Show information about a Discord member/user.',

        /* Features: Configuration */
        'feat.cfg.view': '/config view',
        'feat.cfg.view.desc': 'View current configuration.',
        'feat.cfg.helpchannel': '/config help_channel',
        'feat.cfg.helpchannel.desc': 'Configure Help channel.',
        'feat.cfg.warping': '/config war_ping_role',
        'feat.cfg.warping.desc': 'Configure War ping role.',
        'feat.cfg.backuping': '/config backup_ping_role',
        'feat.cfg.backuping.desc': 'Configure Backup ping role.',
        'feat.cfg.joinedwar': '/config joined_war_role',
        'feat.cfg.joinedwar.desc': 'Configure role given/used for joined War sessions.',
        'feat.cfg.joinedbackup': '/config joined_backup_role',
        'feat.cfg.joinedbackup.desc': 'Configure role given/used for joined Backup sessions.',
        'feat.cfg.hacker': '/config hacker_role',
        'feat.cfg.hacker.desc': 'Configure Hacker role.',
        'feat.cfg.server.notes': 'Configuration is server-specific.',

        /* Features: Help System */
        'feat.hp.main': '!help',
        'feat.hp.main.desc': 'Opens the Categories menu. Users can navigate features without receiving a large wall of text.',
        'feat.hp.main.notes': 'Help Menu uses categories and a dropdown for easy navigation.',
        'feat.hp.feature': '!help <feature>',
        'feat.hp.feature.desc': 'Shows ONLY the selected feature/command\'s detailed instructions.',

        /* Permissions */
        'perm.mod': 'Moderation Permissions',
        'perm.owner': 'Server Owner',
        'perm.manager': 'Manager Permissions',
        'perm.config': 'Per Server Config',

        /* Command descriptions */
        'cmd.chat': 'Chat with AI',
        'cmd.image': 'Generate AI images',
        'cmd.ban': 'Ban a user from the server',
        'cmd.unban': 'Unban a user',
        'cmd.mute': 'Temporarily timeout a user',
        'cmd.unmute': 'Remove user timeout',
        'cmd.banzone': 'Configure Ban Zone mode',
        'cmd.setbanchannel': 'Set Ban Zone channel',
        'cmd.banwhitelist': 'Manage Ban Zone whitelist',
        'cmd.bandebug': 'Debug Ban Zone',
        'cmd.war': 'Create a War session',
        'cmd.backup': 'Create a Backup session',
        'cmd.win': 'End with Win result',
        'cmd.lose': 'End with Lose result',
        'cmd.end': 'End the session',
        'cmd.endall': 'End all War/Backup sessions',
        'cmd.callhacker': 'Show/hide Call Hacker button',
        'cmd.evsend': 'Send the event panel',
        'cmd.evtest': 'Test event functionality',
        'cmd.evparticipants': 'View participants',
        'cmd.evcount': 'View participant count',
        'cmd.evremove': 'Remove a participant',
        'cmd.evclear': 'Clear all participants',
        'cmd.evblacklist': 'Manage event blacklist',
        'cmd.info': 'Bot info and status',
        'cmd.serverinfo': 'Server information',
        'cmd.userinfo': 'User information',
        'cmd.cfgview': 'View configuration',
        'cmd.cfghelp': 'Configure Help channel',
        'cmd.cfgwar': 'Configure War ping role',
        'cmd.cfgbackup': 'Configure Backup ping role',
        'cmd.cfgjwar': 'Configure Joined War role',
        'cmd.cfgjbackup': 'Configure Joined Backup role',
        'cmd.cfghacker': 'Configure Hacker role',
        'cmd.help': 'Open Help Menu',
        'cmd.helpfeature': 'View specific feature help',

        /* Command table */
        'table.cmd': 'Command',
        'table.desc': 'Description',
        'table.cat': 'Category',
        'table.perm': 'Permission',
        'perm.none': 'None required',

        /* Help Menu */
        'help.header': 'Nova Help Menu',
        'help.section': 'Help Menu',
        'help.desc': 'This is Nova\'s help menu. Use the list below to view the category you want.',
        'help.categories': 'Categories',
        'help.tip': 'Tip: Pick a category below for details.',
        'help.placeholder': 'Make a selection',
        'help.content.ai': 'AI Chat, AI Image Generation, AI Fallback. Use !help for details.',
        'help.content.moderation': 'Ban, Unban, Mute, Unmute. Moderation actions respect Discord permissions.',
        'help.content.banzone': '/banzone, /setbanchannel, /banwhitelist, /bandebug. Only Server Owner manages whitelist.',
        'help.content.warbackup': 'War, Backup, Win, Lose, End, /end all, /callhacker. Button permissions are configurable.',
        'help.content.event': '/event send, /event test, /event participants, /event count, /event remove, /event clear, /event blacklist.',
        'help.content.serverinfo': '/info, /serverinfo, /userinfo. View bot, server and user information.',
        'help.content.configuration': '/config view, /config help_channel, /config war_ping_role, /config backup_ping_role, /config joined_war_role, /config joined_backup_role, /config hacker_role.',
        'help.content.helpsystem': '!help opens categories. !help <feature> shows details. Examples: !help chat, !help ban.',

        /* Modal */
        'modal.desc': 'Description',
        'modal.cmds': 'Commands',
        'modal.example': 'Example',
        'modal.perm': 'Permission Required',
        'modal.notes': 'Notes',
        'modal.related': 'Related',
        'modal.close': 'Close',

        /* Footer */
        'footer.tagline': 'AI-powered Discord bot',
        'footer.owner': 'Bot Owner: ' + CONFIG.BOT_OWNER,
        'footer.col.nav': 'Navigation',
        'footer.col.community': 'Community',
        'footer.col.contact': 'Contact',
        'footer.link.home': 'Home',
        'footer.link.features': 'Features',
        'footer.link.commands': 'Commands',
        'footer.link.privacy': 'Privacy Policy',
        'footer.link.terms': 'Terms of Service',
        'footer.link.support': 'Support Server',
        'footer.invite': 'Invite Nova',
        'footer.support': 'Join Support Server',
        'footer.copyright': '© 2026 Nova. All rights reserved.',

        /* Privacy */
        'privacy.badge': 'Privacy Policy',
        'privacy.title': 'Privacy Policy',
        'privacy.effective': 'Effective date: ' + CONFIG.EFFECTIVE_DATE_EN,
        'privacy.s1.title': 'Introduction',
        'privacy.s1.text': 'This Privacy Policy explains how Nova collects, uses, and processes information when you use our Discord bot. By using Nova, you agree to the practices described in this policy.',
        'privacy.s2.title': 'Information that may be processed',
        'privacy.s2.text': 'Nova may process the following types of information when necessary for bot functionality:',
        'privacy.s2.items': [
            'Discord user/server identifiers where necessary for bot functionality',
            'Command interaction data where required',
            'Configuration data',
            'AI interaction data',
            'Moderation-related data where required for functionality'
        ],
        'privacy.s3.title': 'How information is used',
        'privacy.s3.text': 'Information is used independently for each Discord server to provide, maintain and improve Nova features including AI, moderation, Ban Zone, War / Backup, Events and server utilities. Configuration data is stored independently per server.',
        'privacy.s4.title': 'Data retention principles',
        'privacy.s4.text': 'Data is retained for as long as necessary to provide the service. Specific retention principles depend on deployment configuration and data type. Server configuration is stored independently for each Discord server.',
        'privacy.s5.title': 'Security',
        'privacy.s5.text': 'Reasonable security measures are implemented to protect data. No method of transmission or storage is completely secure. Specific details about encryption or infrastructure are not publicly disclosed.',
        'privacy.s6.title': 'Third-party services',
        'privacy.s6.text': 'Nova integrates with Discord API and the AI provider (' + CONFIG.AI_PROVIDER + '). Usage of these services is governed by each respective provider\'s privacy policy.',
        'privacy.s7.title': 'User rights and contact',
        'privacy.s7.text': 'If you have questions about data handling, wish to request review of your data, or have any privacy concerns, please contact us through the channels provided below.',
        'privacy.contact.title': 'Contact information',
        'privacy.contact.owner': 'Bot Owner: ' + CONFIG.BOT_OWNER,
        'privacy.contact.email': 'Email: ' + CONFIG.CONTACT_EMAIL,
        'privacy.contact.support': 'Support Server: ' + CONFIG.SUPPORT_SERVER_URL,

        /* Terms */
        'terms.badge': 'Terms of Service',
        'terms.title': 'Terms of Service',
        'terms.effective': 'Effective date: ' + CONFIG.EFFECTIVE_DATE_EN,
        'terms.disclaimer': 'Nova is a third-party Discord bot and is not an official Discord product.',
        'terms.s1.title': 'Introduction',
        'terms.s1.text': 'These Terms of Service govern your use of the Nova Discord bot. By using Nova, you agree to abide by these terms.',
        'terms.s2.title': 'Acceptance of terms',
        'terms.s2.text': 'By adding Nova to your Discord server or using any bot commands, you acknowledge that you have read, understood, and agree to these terms. If you do not agree, please do not use Nova.',
        'terms.s3.title': 'Acceptable use',
        'terms.s3.text': 'You agree to use Nova only for lawful purposes and in compliance with Discord\'s Terms of Service. You may not use Nova to spam, abuse, or engage in harmful behavior toward other users.',
        'terms.s4.title': 'Prohibited abuse',
        'terms.s4.text': 'Users are responsible for the content they submit through Nova. You may not use Nova to transmit content that is offensive, threatening, obscene, infringing, or illegal. Deliberate abuse of AI, moderation, Ban Zone, or War/Backup features may result in termination of access.',
        'terms.s5.title': 'Discord permission requirements',
        'terms.s5.text': 'Nova requires Discord permissions necessary to function. Moderation actions and configuration respect Discord role hierarchy and user permissions. The bot cannot perform actions beyond its permissions within the server.',
        'terms.s6.title': 'AI feature limitations',
        'terms.s6.text': 'AI features use ' + CONFIG.AI_PROVIDER + '. We do not guarantee that AI-generated content will always be accurate, complete, or appropriate. Use information from AI at your own discretion. AI services may be unavailable at times.',
        'terms.s7.title': 'Moderation feature limitations',
        'terms.s7.text': 'Moderation features are provided to assist with server management. We do not guarantee that every moderation action will be successful or appropriate in every situation. Server administrators are responsible for oversight and adjustment.',
        'terms.s8.title': 'Availability',
        'terms.s8.text': 'We do not guarantee that Nova will operate uninterrupted or error-free. Service may be interrupted due to maintenance, updates, or third-party issues beyond our control.',
        'terms.s9.title': 'Service changes',
        'terms.s9.text': 'We reserve the right to update, modify, or remove Nova features at any time. We will attempt to provide advance notice of significant changes when possible.',
        'terms.s10.title': 'Termination',
        'terms.s10.text': 'We may suspend or terminate your access to Nova if you violate these terms. You may stop using Nova at any time by removing the bot from your server.',
        'terms.s11.title': 'Limitation of liability',
        'terms.s11.text': 'To the extent permitted by law, Nova and its maintainers are not liable for any indirect, incidental, special, consequential, or punitive damages arising from the use or inability to use the bot.',
        'terms.s12.title': 'Contact',
        'terms.s12.text': 'If you have questions about these terms, please contact us at:',
        'terms.contact.owner': 'Bot Owner: ' + CONFIG.BOT_OWNER,
        'terms.contact.email': 'Email: ' + CONFIG.CONTACT_EMAIL,
        'terms.contact.support': 'Support Server: ' + CONFIG.SUPPORT_SERVER_URL,

        /* Common */
        'common.or': 'or'
    }
};

/* ---------- Language Manager ---------- */
const Lang = {
    current: 'vi',
    KEY: 'nova-language',

    init() {
        const saved = localStorage.getItem(this.KEY);
        if (saved === 'en' || saved === 'vi') this.current = saved;
        this.apply();
        this.updateUI();
    },

    set(lang) {
        if (lang !== 'vi' && lang !== 'en') return;
        this.current = lang;
        localStorage.setItem(this.KEY, lang);
        this.apply();
        this.updateUI();
        this.updateMeta();
        // Re-render dynamic content
        if (typeof renderCategories === 'function') renderCategories();
        if (typeof renderCommandDirectory === 'function') renderCommandDirectory();
        if (typeof updateHelpMenuContent === 'function') {
            const active = document.querySelector('.helpmenu-cat-item.active');
            if (active) updateHelpMenuContent(active.dataset.cat);
        }
    },

    t(key) {
        return T[this.current][key] !== undefined ? T[this.current][key] : key;
    },

    apply() {
        document.documentElement.lang = this.current;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const val = this.t(key);
            if (Array.isArray(val)) {
                el.innerHTML = val.map(v => `<li>${v}</li>`).join('');
            } else {
                el.textContent = val;
            }
        });
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attr = el.getAttribute('data-i18n-attr');
            const key = el.getAttribute('data-i18n-key');
            el.setAttribute(attr, this.t(key));
        });
        document.querySelectorAll('[data-href]').forEach(el => {
            const type = el.getAttribute('data-href');
            if (type === 'invite') el.href = CONFIG.BOT_INVITE_URL;
            else if (type === 'support') el.href = CONFIG.SUPPORT_SERVER_URL;
            else if (type === 'email') el.href = 'mailto:' + CONFIG.CONTACT_EMAIL;
        });
    },

    updateUI() {
        document.querySelectorAll('.lang-switch').forEach(sw => {
            sw.classList.remove('vi', 'en');
            sw.classList.add(this.current);
        });
        document.querySelectorAll('.lang-btn').forEach(btn => {
            const active = btn.dataset.lang === this.current;
            btn.setAttribute('aria-selected', active);
        });
    },

    updateMeta() {
        const page = document.body.dataset.page;
        const t = T[this.current];
        if (page === 'index') {
            document.title = 'Nova — Intelligent Discord Bot';
            const desc = document.querySelector('meta[name="description"]');
            if (desc) desc.setAttribute('content', t['hero.desc']);
        } else if (page === 'privacy') {
            document.title = t['privacy.title'] + ' — Nova';
        } else if (page === 'terms') {
            document.title = t['terms.title'] + ' — Nova';
        }
    }
};

/* ---------- State ---------- */
const State = {
    activeCategory: 'ai',
    activeFeature: null,
    modalOpen: false,
    helpActiveCat: 'ai',
    searchQuery: ''
};

/* ============================================================
   INITIALIZATION (runs after DOMContentLoaded)
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    Lang.init();
    initNavbarScroll();
    initMobileMenu();
    initLanguageSwitch();
    initInviteButtons();
    initPageTransitions();
    initSmoothScroll();
    initScrollReveal();
    initAvatarFallback();

    const page = document.body.dataset.page;
    if (page === 'index') {
        renderCategories();
        renderCommandDirectory();
        initCategorySystem();
        initSearch();
        initModal();
        initHelpMenu();
        initIOSDropdown();
    }
});

/* ---------- Navbar Scroll ---------- */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}

/* ---------- Mobile Menu ---------- */
function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    if (!btn || !menu || !overlay) return;

    const open = () => {
        btn.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        menu.classList.add('open');
        overlay.classList.add('open');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        btn.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        menu.classList.remove('open');
        overlay.classList.remove('open');
        setTimeout(() => overlay.style.display = 'none', 320);
        document.body.style.overflow = '';
    };
    btn.addEventListener('click', () => btn.classList.contains('open') ? close() : open());
    overlay.addEventListener('click', close);
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && btn.classList.contains('open')) close();
    });
}

/* ---------- Language Switch ---------- */
function initLanguageSwitch() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => Lang.set(btn.dataset.lang));
        btn.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                Lang.set(btn.dataset.lang);
            }
        });
    });
}

/* ---------- Invite Buttons ---------- */
function initInviteButtons() {
    document.querySelectorAll('[data-href="invite"]').forEach(btn => {
        btn.href = CONFIG.BOT_INVITE_URL;
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
    });
}

/* ---------- Page Transitions ---------- */
function initPageTransitions() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.add('page-entering');
    setTimeout(() => document.body.classList.remove('page-entering'), 500);

    document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || link.getAttribute('target') === '_blank') return;
        if (!href.endsWith('.html') && href !== '/' && href !== './' && href !== '') return;

        link.addEventListener('click', e => {
            if (reduced) return;
            e.preventDefault();
            document.body.classList.add('page-transitioning');
            setTimeout(() => window.location.href = href, 260);
        });
    });
}

/* ---------- Smooth Scroll ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const href = link.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        return;
    }
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const stagger = parseInt(el.dataset.stagger || '0', 10);
                setTimeout(() => el.classList.add('visible'), stagger * 60);
                obs.unobserve(el);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach((el, i) => {
        if (!el.dataset.stagger) {
            const parent = el.closest('.features-grid, .command-directory, .contact-grid');
            if (parent) {
                const sibs = Array.from(parent.querySelectorAll('.reveal'));
                el.dataset.stagger = sibs.indexOf(el);
            }
        }
        obs.observe(el);
    });
}

/* ---------- Avatar Fallback ---------- */
function initAvatarFallback() {
    document.querySelectorAll('.hero-avatar img, .nav-brand-avatar img').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
}

/* ============================================================
   INDEX PAGE ONLY: Feature Category System
   ============================================================ */

function renderCategories() {
    const sidebar = document.getElementById('categories-sidebar');
    if (!sidebar) return;

    sidebar.innerHTML = `<div class="categories-title" data-i18n="sec.features.eyebrow">${Lang.t('sec.features.eyebrow')}</div>` +
        CATEGORY_ORDER.map(catId => {
            const cat = FEATURES[catId];
            const active = State.activeCategory === catId ? 'active' : '';
            return `<button type="button" class="category-btn ${active}" data-cat="${catId}" aria-pressed="${active === 'active'}">
                <span class="cat-icon">${cat.icon}</span>
                <span>${Lang.t(cat.catKey)}</span>
            </button>`;
        }).join('');

    renderCategoryPanel();
}

function renderCategoryPanel() {
    const panel = document.getElementById('category-panel');
    if (!panel) return;
    const cat = FEATURES[State.activeCategory];

    panel.innerHTML = `
        <div class="panel-header">
            <div class="panel-icon">${cat.icon}</div>
            <div>
                <h2 class="panel-title">${Lang.t(cat.catKey)}</h2>
                <p class="panel-desc">${Lang.t(cat.descKey)}</p>
            </div>
        </div>
        <div class="features-grid">
            ${cat.features.map((f, i) => `
                <button type="button" class="feature-card reveal" data-feature="${f.id}" tabindex="0" style="animation-delay:${i * 50}ms">
                    <span class="feature-card-arrow" aria-hidden="true">›</span>
                    <h3 class="feature-card-title"><span>${f.icon}</span>${Lang.t(f.nameKey)}</h3>
                    <p class="feature-card-desc">${Lang.t(f.descKey)}</p>
                    ${f.commands.length ? `<div class="feature-card-commands">
                        ${f.commands.map((c, idx) => `<span class="cmd-pill ${idx > 1 ? 'muted' : ''}">${c}</span>`).join('')}
                        ${f.commands.length > 3 ? `<span class="cmd-pill muted">+${f.commands.length - 3}</span>` : ''}
                    </div>` : ''}
                    ${f.permission ? `<div class="feature-info"><span class="info-tag permission">${Lang.t(f.permission)}</span></div>` : ''}
                </button>
            `).join('')}
        </div>
    `;

    // Re-observe reveals
    requestAnimationFrame(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        panel.querySelectorAll('.reveal').forEach((el, i) => {
            if (reduced) { el.classList.add('visible'); return; }
            setTimeout(() => el.classList.add('visible'), i * 60);
        });
    });

    // Bind feature card clicks
    panel.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => openFeatureModal(card.dataset.feature));
        card.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openFeatureModal(card.dataset.feature);
            }
        });
    });
}

function initCategorySystem() {
    const sidebar = document.getElementById('categories-sidebar');
    if (!sidebar) return;

    sidebar.addEventListener('click', e => {
        const btn = e.target.closest('.category-btn');
        if (!btn) return;
        State.activeCategory = btn.dataset.cat;
        sidebar.querySelectorAll('.category-btn').forEach(b => {
            b.classList.toggle('active', b.dataset.cat === State.activeCategory);
            b.setAttribute('aria-pressed', b.dataset.cat === State.activeCategory);
        });
        renderCategoryPanel();
    });

    // Keyboard nav for sidebar
    sidebar.addEventListener('keydown', e => {
        const btns = Array.from(sidebar.querySelectorAll('.category-btn'));
        const idx = btns.indexOf(document.activeElement);
        if (idx === -1) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            btns[(idx + 1) % btns.length].focus();
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            btns[(idx - 1 + btns.length) % btns.length].focus();
        }
    });
}

/* ============================================================
   Feature Detail Modal
   ============================================================ */

function findFeature(id) {
    for (const catId of CATEGORY_ORDER) {
        const f = FEATURES[catId].features.find(x => x.id === id);
        if (f) return { feature: f, category: FEATURES[catId] };
    }
    return null;
}

function openFeatureModal(id) {
    const found = findFeature(id);
    if (!found) return;
    const { feature, category } = found;
    State.activeFeature = id;
    State.modalOpen = true;

    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('modal-content');

    const relatedHtml = feature.related && feature.related.length ? `
        <div class="modal-section">
            <div class="modal-section-title">${Lang.t('modal.related')}</div>
            <div class="modal-related">
                ${feature.related.map(rid => {
                    const r = findFeature(rid);
                    if (!r) return '';
                    return `<span class="related-tag" data-related="${rid}">${Lang.t(r.feature.nameKey)}</span>`;
                }).join('')}
            </div>
        </div>
    ` : '';

    const commandsHtml = feature.commands.length ? `
        <div class="modal-section">
            <div class="modal-section-title">${Lang.t('modal.cmds')}</div>
            <div class="modal-commands-list">
                ${feature.commands.map(c => `<div class="modal-command-item"><span class="modal-command-name">${c}</span></div>`).join('')}
            </div>
        </div>
    ` : '';

    const exampleHtml = feature.example ? `
        <div class="modal-section">
            <div class="modal-section-title">${Lang.t('modal.example')}</div>
            <div class="modal-example">${feature.example}</div>
        </div>
    ` : '';

    const permHtml = feature.permission ? `
        <div class="modal-section">
            <div class="modal-section-title">${Lang.t('modal.perm')}</div>
            <span class="info-tag permission">${Lang.t(feature.permission)}</span>
        </div>
    ` : '';

    const notesHtml = feature.notesKey ? `
        <div class="modal-section">
            <div class="modal-section-title">${Lang.t('modal.notes')}</div>
            <div class="modal-notes">${Lang.t(feature.notesKey)}</div>
        </div>
    ` : '';

    modal.innerHTML = `
        <div class="modal-header">
            <div class="modal-header-info">
                <div class="modal-icon">${feature.icon}</div>
                <div>
                    <h3 class="modal-title">${Lang.t(feature.nameKey)}</h3>
                    <div class="modal-category">${Lang.t(category.catKey)}</div>
                </div>
            </div>
            <button type="button" class="modal-close" id="modal-close-btn" aria-label="${Lang.t('modal.close')}">×</button>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <div class="modal-section-title">${Lang.t('modal.desc')}</div>
                <p>${Lang.t(feature.descKey)}</p>
            </div>
            ${commandsHtml}
            ${exampleHtml}
            ${permHtml}
            ${notesHtml}
            ${relatedHtml}
        </div>
    `;

    overlay.classList.add('open');
    document.body.classList.add('modal-open');

    document.getElementById('modal-close-btn').addEventListener('click', closeModal);
    modal.querySelectorAll('.related-tag').forEach(tag => {
        tag.addEventListener('click', () => openFeatureModal(tag.dataset.related));
    });

    setTimeout(() => document.getElementById('modal-close-btn').focus(), 50);
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('open');
    document.body.classList.remove('modal-open');
    State.modalOpen = false;
    State.activeFeature = null;
}

function initModal() {
    const overlay = document.getElementById('modal-overlay');
    if (!overlay) return;

    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && State.modalOpen) closeModal();
    });
}

/* ============================================================
   Command Directory
   ============================================================ */

function renderCommandDirectory() {
    const container = document.getElementById('command-directory');
    if (!container) return;

    const grouped = {};
    COMMAND_DIRECTORY.forEach(cmd => {
        if (!grouped[cmd.cat]) grouped[cmd.cat] = [];
        grouped[cmd.cat].push(cmd);
    });

    container.innerHTML = CATEGORY_ORDER.filter(cid => grouped[cid]).map(catId => {
        const cat = FEATURES[catId];
        const cmds = grouped[catId];
        return `
            <div class="cmd-category-group reveal">
                <div class="cmd-category-header">
                    <div class="cmd-category-icon">${cat.icon}</div>
                    <div class="cmd-category-title">${Lang.t(cat.catKey)}</div>
                </div>
                <table class="cmd-table">
                    <thead>
                        <tr>
                            <th data-i18n="table.cmd">${Lang.t('table.cmd')}</th>
                            <th data-i18n="table.desc">${Lang.t('table.desc')}</th>
                            <th data-i18n="table.perm">${Lang.t('table.perm')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${cmds.map(c => `
                            <tr>
                                <td data-label="${Lang.t('table.cmd')}"><span class="cmd-name">${c.cmd}</span></td>
                                <td data-label="${Lang.t('table.desc')}" class="cmd-desc">${Lang.t(c.descKey)}</td>
                                <td data-label="${Lang.t('table.perm')}">${c.perm ? `<span class="cmd-perm">${Lang.t(c.perm)}</span>` : `<span class="cmd-perm none">${Lang.t('perm.none')}</span>`}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }).join('');
}

/* ============================================================
   Search
   ============================================================ */

function initSearch() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    input.addEventListener('input', e => {
        const q = e.target.value.trim().toLowerCase();
        State.searchQuery = q;
        if (!q) {
            results.classList.remove('has-results');
            results.innerHTML = '';
            return;
        }

        const matches = [];
        // Search commands
        COMMAND_DIRECTORY.forEach(c => {
            if (c.cmd.toLowerCase().includes(q) || Lang.t(c.descKey).toLowerCase().includes(q)) {
                matches.push({ type: 'cmd', cmd: c, name: c.cmd, desc: Lang.t(c.descKey), cat: Lang.t(c.catKey) });
            }
        });
        // Search features
        for (const catId of CATEGORY_ORDER) {
            FEATURES[catId].features.forEach(f => {
                if (Lang.t(f.nameKey).toLowerCase().includes(q) || Lang.t(f.descKey).toLowerCase().includes(q)) {
                    if (!matches.find(m => m.type === 'feature' && m.id === f.id)) {
                        matches.push({ type: 'feature', id: f.id, name: Lang.t(f.nameKey), desc: Lang.t(f.descKey), cat: Lang.t(FEATURES[catId].catKey) });
                    }
                }
            });
        }

        if (!matches.length) {
            results.classList.add('has-results');
            results.innerHTML = `<div class="search-empty">${Lang.t('sec.search.empty')}</div>`;
            return;
        }

        results.classList.add('has-results');
        results.innerHTML = matches.slice(0, 10).map(m => `
            <div class="search-result-item" tabindex="0" data-type="${m.type}" ${m.type === 'cmd' ? `data-cmd="${m.cmd}"` : `data-feature="${m.id}"`}>
                <span class="search-result-cmd">${m.type === 'cmd' ? m.cmd : '★'}</span>
                <div class="search-result-info">
                    <div class="search-result-name">${m.name}</div>
                    <div class="search-result-cat">${m.cat}</div>
                </div>
            </div>
        `).join('');

        results.querySelectorAll('.search-result-item').forEach(item => {
            const open = () => {
                if (item.dataset.type === 'feature') {
                    const found = findFeature(item.dataset.feature);
                    if (found) {
                        State.activeCategory = found.category.id;
                        renderCategories();
                        document.getElementById('features-section').scrollIntoView({ behavior: 'smooth' });
                        setTimeout(() => openFeatureModal(item.dataset.feature), 400);
                    }
                } else {
                    document.getElementById('commands-section').scrollIntoView({ behavior: 'smooth' });
                }
                input.value = '';
                results.classList.remove('has-results');
            };
            item.addEventListener('click', open);
            item.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
            });
        });
    });

    // Close results on outside click
    document.addEventListener('click', e => {
        if (!e.target.closest('.search-section')) {
            results.classList.remove('has-results');
        }
    });
}

/* ============================================================
   Help Menu Mockup
   ============================================================ */

function initHelpMenu() {
    const container = document.getElementById('helpmenu-categories');
    if (!container) return;

    container.innerHTML = CATEGORY_ORDER.map(catId => {
        const cat = FEATURES[catId];
        const active = State.helpActiveCat === catId ? 'active' : '';
        return `<div class="helpmenu-cat-item ${active}" data-cat="${catId}" tabindex="0" role="button">
            <span>${cat.icon}</span><span>${Lang.t(cat.catKey)}</span>
        </div>`;
    }).join('');

    container.querySelectorAll('.helpmenu-cat-item').forEach(item => {
        const activate = () => {
            State.helpActiveCat = item.dataset.cat;
            container.querySelectorAll('.helpmenu-cat-item').forEach(i => i.classList.toggle('active', i.dataset.cat === State.helpActiveCat));
            updateHelpMenuContent(State.helpActiveCat);
        };
        item.addEventListener('click', activate);
        item.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activate(); }
        });
    });

    updateHelpMenuContent(State.helpActiveCat);
}

function updateHelpMenuContent(catId) {
    const content = document.getElementById('helpmenu-content');
    if (!content) return;
    const cat = FEATURES[catId];
    const cmds = cat.features.filter(f => f.commands.length).slice(0, 4).flatMap(f => f.commands.slice(0, 1));
    content.innerHTML = `
        <div class="helpmenu-content-title">${cat.icon} ${Lang.t(cat.catKey)}</div>
        <div class="helpmenu-content-desc">${Lang.t('help.content.' + catId)}</div>
        ${cmds.length ? `<div class="helpmenu-content-cmds">${cmds.map(c => `<span class="cmd-pill">${c}</span>`).join('')}</div>` : ''}
    `;
}

/* ============================================================
   iOS Dropdown
   ============================================================ */

function initIOSDropdown() {
    document.querySelectorAll('.ios-dropdown').forEach(dd => {
        const trigger = dd.querySelector('.ios-dropdown-trigger');
        const menu = dd.querySelector('.ios-dropdown-menu');
        const options = dd.querySelectorAll('.ios-dropdown-menu li');
        const label = dd.querySelector('.ios-dropdown-label');
        if (!trigger || !menu) return;

        const open = () => {
            dd.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        };
        const close = () => {
            dd.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        };

        trigger.addEventListener('click', e => {
            e.stopPropagation();
            dd.classList.contains('open') ? close() : open();
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                options.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                if (label) label.textContent = opt.textContent.trim();
                const catId = opt.dataset.cat;
                if (catId) {
                    State.helpActiveCat = catId;
                    const helpItems = document.querySelectorAll('.helpmenu-cat-item');
                    helpItems.forEach(i => i.classList.toggle('active', i.dataset.cat === catId));
                    updateHelpMenuContent(catId);
                }
                close();
            });
        });

        document.addEventListener('click', e => {
            if (!dd.contains(e.target)) close();
        });
        trigger.addEventListener('keydown', e => {
            if (e.key === 'Escape') close();
        });
    });
}
