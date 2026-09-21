/* ============================================================
   NOVA — script.js
   Language, sticky nav, auto Update Log with 24h snooze,
   feature modals, command search, Help preview, unified
   Slash/Prefix commands, temporary NEW badge logic,
   nav scroll spy.
   ============================================================ */
'use strict';

const CONFIG = {
    BOT_NAME: "Nova",
    BOT_OWNER: "nova_.inovation",
    BOT_AVATAR: "assets/avatar.png",
    BOT_INVITE_URL:
        "https://discord.com/oauth2/authorize?client_id=1532745879944036523",
    CONTACT_EMAIL: "anhbao27072011@gmail.com",
    SUPPORT_SERVER_URL: "https://discord.gg/qkyu3G6WMa",
    AI_PROVIDER: "Qwen3.7-max",
    EFFECTIVE_DATE: "19/09/2026"
};

const LS_LANG = 'nova-lang';
const LS_SNOOZE = 'nova_update_log_snooze_until';

const FALLBACK_AVATAR =
  "data:image/svg+xml;charset=utf-8," + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
      <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#7c5cff"/><stop offset=".55" stop-color="#5f3fff"/>
        <stop offset="1" stop-color="#3fa9ff"/></linearGradient></defs>
      <rect width="128" height="128" rx="34" fill="url(#g)"/>
      <path d="M40 88V40l24 28 24-28v48" fill="none" stroke="#fff" stroke-width="9"
            stroke-linecap="round" stroke-linejoin="round" opacity=".95"/>
    </svg>`);

/* ============================================================
   I18N
   ============================================================ */
const I18N = {
  vi: {
    "meta.title": "Nova — AI Discord Bot",
    "a11y.skip": "Chuyển tới nội dung",
    "nav.home": "Trang chủ",
    "nav.features": "Tính năng",
    "nav.commands": "Lệnh",
    "nav.help": "Help",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "nav.invite": "Mời Nova",
    "hero.badge": "AI Discord Bot · Qwen3.7-max",
    "hero.sub": "Bot Discord thông minh cho AI chat, tạo ảnh AI, kiểm duyệt, điều phối War/Backup, sự kiện, bảo vệ Ban Zone, thông tin server và các công cụ riêng cho từng server.",
    "hero.invite": "Mời Nova",
    "hero.support": "Tham gia Support Server",
    "hero.explore": "Khám phá tính năng",
    "hero.stat1l": "Mô hình AI công khai",
    "hero.stat2l": "Chủ sở hữu bot",
    "hero.stat3l": "Nhóm tính năng",
    "hero.stat4l": "Lệnh slash & prefix",
    "features.kicker": "Tính năng",
    "features.title": "Mọi thứ Nova có thể làm",
    "features.sub": "Nhấn vào một nhóm tính năng để xem mô tả đầy đủ, danh sách lệnh, quyền cần thiết và ví dụ.",
    "features.view": "Xem chi tiết",
    "features.commands": "lệnh",
    "commands.kicker": "Thư viện lệnh",
    "commands.title": "Tìm kiếm lệnh",
    "commands.sub": "Tìm theo tên lệnh, mô tả, quyền hoặc nhóm tính năng. Mỗi lệnh có cả slash và prefix chỉ hiển thị một dòng duy nhất.",
    "commands.search": "Tìm lệnh, tính năng, quyền… (ví dụ: info, prefix, chat)",
    "commands.all": "Tất cả",
    "commands.noResults": "Không tìm thấy lệnh nào khớp với từ khoá của bạn. Hãy thử “info”, “prefix”, “chat” hoặc “ban”.",
    "commands.results": "kết quả",
    "commands.permission": "Quyền",
    "commands.example": "Ví dụ",
    "commands.type.slash": "SLASH",
    "commands.type.prefix": "PREFIX",
    "commands.type.both": "SLASH/PREFIX",
    "commands.type.button": "BUTTON",
    "help.kicker": "Help",
    "help.title": "Xem trước Help Menu",
    "help.sub": "Đây là bản xem trước tương tác của Help Menu thật trong Discord. Chọn một nhóm bên dưới để xem nội dung.",
    "help.embedText": "Đây là help menu của bot. Dùng dropdown bên dưới để xem nhóm bạn muốn.",
    "help.categories": "Danh mục",
    "help.tip": "Mới bắt đầu? Hãy xem nhóm AI Chatbot hoặc War Ping / Backup Ping bên dưới để làm quen.",
    "help.pick": "Chọn một danh mục bên dưới để xem chi tiết",
    "help.selectLabel": "Danh mục trợ giúp",
    "help.selectPlaceholder": "Chọn một mục",
    "help.cmdTitle": "!help <feature>",
    "help.cmdSub": "Nhập một tính năng để chỉ xem hướng dẫn chi tiết của riêng nó — không hiển thị toàn bộ danh mục.",
    "help.cmdGo": "Xem",
    "help.tipsTitle": "Mẹo sử dụng",
    "help.tip1": "Dùng <code>/</code> để xem toàn bộ slash command của Nova.",
    "help.tip2": "Dùng tiền tố <code>!</code> cho các lệnh prefix như <code>!chat</code>, <code>!info</code>, <code>!help</code>.",
    "help.tip3": "Mỗi server có thể đặt prefix riêng bằng <code>!prefix &lt;ký tự&gt;</code>.",
    "help.notFound": "Không tìm thấy tính năng này. Hãy thử: chat, info, ban, mute, warping, image, event, banzone, persona, config, help, prefix, serverinfo, userinfo, bandebug, trust.",
    "footer.owned": "Được phát triển và duy trì bởi <strong>nova_.inovation</strong>.",
    "footer.model": "Mô hình AI công khai",
    "footer.links": "Liên kết",
    "footer.supportTitle": "Hỗ trợ",
    "footer.supportLink": "Support Server",
    "footer.inviteLink": "Mời Nova",
    "footer.effective": "Ngày hiệu lực",
    "footer.rights": "Mọi quyền được bảo lưu.",
    "footer.note": "Trang web tĩnh chỉ mang tính giới thiệu. Nova không lưu trữ token hay khóa API trên trang này.",
    "legal.kicker": "Pháp lý",
    "legal.effective": "Ngày hiệu lực",
    "legal.contactTitle": "Liên hệ",
    "legal.contactText": "Nếu bạn có câu hỏi về chính sách này hoặc muốn yêu cầu xoá dữ liệu, hãy liên hệ:",
    "legal.email": "Email",
    "legal.support": "Support Server",
    "legal.owner": "Chủ sở hữu",
    "modal.commandsTitle": "Lệnh",
    "modal.featuresTitle": "Chi tiết",
    "modal.permsTitle": "Quyền cần thiết",
    "modal.examplesTitle": "Ví dụ",
    "modal.invite": "Mời Nova",
    "modal.support": "Support Server",
    "privacy.title": "Chính sách bảo mật",
    "privacy.lead": "Tài liệu này giải thích Nova xử lý những dữ liệu nào khi bạn sử dụng bot, vì sao cần thiết và bạn có những quyền gì.",
    "terms.title": "Điều khoản dịch vụ",
    "terms.lead": "Khi mời Nova vào server hoặc sử dụng bất kỳ tính năng nào của bot, bạn đồng ý với các điều khoản dưới đây.",
    "update.sub": "Tính năng mới trong Nova",
    "update.snoozeLabel": "Tắt update-logs trong 24h",
    "update.okay": "Okay",
    "new.vi": "✨ MỚI",
    "new.en": "✨ NEW"
  },
  en: {
    "meta.title": "Nova — AI Discord Bot",
    "a11y.skip": "Skip to content",
    "nav.home": "Home",
    "nav.features": "Features",
    "nav.commands": "Commands",
    "nav.help": "Help",
    "nav.privacy": "Privacy",
    "nav.terms": "Terms",
    "nav.invite": "Invite Nova",
    "hero.badge": "AI Discord Bot · Qwen3.7-max",
    "hero.sub": "An intelligent Discord bot for AI chat, AI image generation, moderation, War/Backup coordination, Events, Ban Zone protection, server information, and server-specific tools.",
    "hero.invite": "Invite Nova",
    "hero.support": "Join Support Server",
    "hero.explore": "Explore Features",
    "hero.stat1l": "Public AI model",
    "hero.stat2l": "Bot owner",
    "hero.stat3l": "Feature groups",
    "hero.stat4l": "Slash & prefix commands",
    "features.kicker": "Features",
    "features.title": "Everything Nova can do",
    "features.sub": "Click a feature category to see the full description, command list, required permissions and examples.",
    "features.view": "View details",
    "features.commands": "commands",
    "commands.kicker": "Command library",
    "commands.title": "Search commands",
    "commands.sub": "Search by command name, description, permission or feature group. Commands with both slash and prefix versions appear as a single entry.",
    "commands.search": "Search commands, features, permissions… (e.g. info, prefix, chat)",
    "commands.all": "All",
    "commands.noResults": "No commands matched your search. Try “info”, “prefix”, “chat” or “ban”.",
    "commands.results": "results",
    "commands.permission": "Permission",
    "commands.example": "Example",
    "commands.type.slash": "SLASH",
    "commands.type.prefix": "PREFIX",
    "commands.type.both": "SLASH/PREFIX",
    "commands.type.button": "BUTTON",
    "help.kicker": "Help",
    "help.title": "Help Menu preview",
    "help.sub": "This is an interactive preview of the bot's real Help Menu in Discord. Pick a category below to see its content.",
    "help.embedText": "This is the bot's help menu. Use the dropdown below to view the category you want.",
    "help.categories": "Categories",
    "help.tip": "New here? Check out the AI Chatbot or War Ping / Backup Ping category below to get started.",
    "help.pick": "Pick a category below for details",
    "help.selectLabel": "Help category",
    "help.selectPlaceholder": "Make a selection",
    "help.cmdTitle": "!help <feature>",
    "help.cmdSub": "Type a feature to see only its detailed help — the full category is not shown.",
    "help.cmdGo": "View",
    "help.tipsTitle": "Usage tips",
    "help.tip1": "Use <code>/</code> to browse all of Nova's slash commands.",
    "help.tip2": "Use the <code>!</code> prefix for prefix commands like <code>!chat</code>, <code>!info</code>, <code>!help</code>.",
    "help.tip3": "Each server can set its own prefix with <code>!prefix &lt;char&gt;</code>.",
    "help.notFound": "Feature not found. Try: chat, info, ban, mute, warping, image, event, banzone, persona, config, help, prefix, serverinfo, userinfo, bandebug, trust.",
    "footer.owned": "Owned and maintained by <strong>nova_.inovation</strong>.",
    "footer.model": "Public AI model",
    "footer.links": "Links",
    "footer.supportTitle": "Support",
    "footer.supportLink": "Support Server",
    "footer.inviteLink": "Invite Nova",
    "footer.effective": "Effective date",
    "footer.rights": "All rights reserved.",
    "footer.note": "This is a static informational site. Nova does not store tokens or API keys on this page.",
    "legal.kicker": "Legal",
    "legal.effective": "Effective date",
    "legal.contactTitle": "Contact",
    "legal.contactText": "If you have questions about this policy or want to request data deletion, contact:",
    "legal.email": "Email",
    "legal.support": "Support Server",
    "legal.owner": "Owner",
    "modal.commandsTitle": "Commands",
    "modal.featuresTitle": "Details",
    "modal.permsTitle": "Required permissions",
    "modal.examplesTitle": "Examples",
    "modal.invite": "Invite Nova",
    "modal.support": "Support Server",
    "privacy.title": "Privacy Policy",
    "privacy.lead": "This document explains what data Nova processes when you use the bot, why it is needed, and what rights you have.",
    "terms.title": "Terms of Service",
    "terms.lead": "By inviting Nova to your server or using any of its features, you agree to the terms below.",
    "update.sub": "What’s new in Nova",
    "update.snoozeLabel": "Don't show update-logs for 24 hours",
    "update.okay": "Okay",
    "new.vi": "✨ MỚI",
    "new.en": "✨ NEW"
  }
};

/* ============================================================
   UPDATE LOG — !info và !prefix được đánh dấu isCurrent:true
   ============================================================ */
const UPDATE_LOG = [
  {
    id: "UPDATE 01",
    date: "19/09/2026",
    items: [
      {
        icon: "ℹ️", isCurrent: true,
        title: { vi: "!info — Thông tin bot", en: "!info — Bot Information" },
        description: {
          vi: "`!info` là bản prefix của `/info`. Cả hai hiển thị cùng một bảng thông tin bot, gồm: thông tin bot, uptime, độ trễ, phiên bản Python, phiên bản discord.py, số server, số người dùng, số kênh, trạng thái AI, mô hình AI, số phiên War đang hoạt động, số phiên Backup đang hoạt động, trusted users, Ban Zone, Help Channel, số lượng lệnh, thông tin server hiện tại, chủ server, vai trò của bot và quyền của bot.",
          en: "`!info` is the prefix version of `/info`. Both display the same bot information panel, including: bot information, uptime, latency, Python version, discord.py version, server count, user count, channel count, AI status, AI model, active War sessions, active Backup sessions, trusted users, Ban Zone, Help Channel, command counts, current server information, server owner, bot role and bot permissions."
        },
        commands: ["/info • !info"]
      },
      {
        icon: "🔧", isCurrent: true,
        title: { vi: "Prefix riêng cho từng server", en: "Custom Server Prefix" },
        description: {
          vi: "Prefix mặc định là `!`. Quản trị viên server đổi bằng `!prefix ?` → sau đó dùng `?chat`, `?info`, `?help`, `?image`. Server khác có thể dùng `!prefix .` → `.chat`, `.info`, `.help`. Prefix được lưu độc lập theo từng Guild, đổi ở server này không ảnh hưởng server khác. DM vẫn dùng `!`. Lệnh này KHÔNG chỉ dành cho chủ bot — cần quyền Administrator / Manage Server / Manage Channels.",
          en: "Default prefix is `!`. A server admin changes it with `!prefix ?` → then use `?chat`, `?info`, `?help`, `?image`. Another server can use `!prefix .` → `.chat`, `.info`, `.help`. Prefix is stored independently per Guild; changing one server does not affect another. DM keeps using `!`. This command is NOT bot-owner-only — requires Administrator / Manage Server / Manage Channels."
        },
        commands: ["!prefix"]
      },
      {
        icon: "🤖", isCurrent: true,
        title: { vi: "AI Channel Toggle", en: "AI Channel Toggle" },
        description: {
          vi: "Bật/tắt chế độ AI cho kênh hiện tại bằng `true` hoặc `false`. Khi bật, người dùng chỉ cần nhắn tin bình thường, không cần gõ `!chat`. Cần quyền **Manage Channels**.",
          en: "Enable or disable AI mode for the current channel with `true` or `false`. Once enabled, users just type normally — no `!chat` needed. Requires **Manage Channels**."
        },
        commands: ["/setai • !setai"]
      },
      {
        icon: "🗃️", isCurrent: true,
        title: { vi: "Shared History Toggle", en: "Shared History Toggle" },
        description: {
          vi: "Bật/tắt lịch sử chat chung cho kênh hiện tại bằng `true` hoặc `false`. Khi bật, cả kênh dùng chung một mạch hội thoại với AI. Cần quyền **Manage Channels**.",
          en: "Enable or disable shared chat history for the current channel with `true` or `false`. When on, the whole channel shares one conversation history with the AI. Requires **Manage Channels**."
        },
        commands: ["/setsharedhistory • !setsharedhistory"]
      },
      {
        icon: "🛡️", isCurrent: true,
        title: { vi: "Moderation Prefix Commands", en: "Moderation Prefix Commands" },
        description: {
          vi: "Các lệnh kiểm duyệt giờ đây hỗ trợ cả Slash và Prefix: `ban`, `unban`, `mute`, `unmute`. Quyền và chức năng giữ nguyên như bản slash — **Ban Members** cho ban/unban, **Moderate Members** cho mute/unmute, timeout tối đa 28 ngày.",
          en: "Moderation commands now support both Slash and Prefix: `ban`, `unban`, `mute`, `unmute`. Permissions and behaviour are unchanged — **Ban Members** for ban/unban, **Moderate Members** for mute/unmute, timeout up to 28 days."
        },
        commands: ["/ban • !ban", "/unban • !unban", "/mute • !mute", "/unmute • !unmute"]
      },
      {
        icon: "🚫", isCurrent: true,
        title: { vi: "Set Ban Channel Prefix", en: "Set Ban Channel Prefix" },
        description: {
          vi: "Bật/tắt Ban Zone cho kênh hiện tại bằng `true` hoặc `false`. Cấu hình được lưu riêng cho từng server.",
          en: "Enable or disable Ban Zone for the current channel with `true` or `false`. Configuration is stored per server."
        },
        commands: ["/setbanchannel • !setbanchannel"]
      },
      {
        icon: "☠️", isCurrent: true,
        title: { vi: "Ban Zone Prefix", en: "Ban Zone Prefix" },
        description: {
          vi: "Chọn chế độ Ban Zone: `ban` hoặc `mute <duration>`. Cả hai chế độ đều tự động dọn tin nhắn 24 giờ gần nhất trên toàn server.",
          en: "Choose the Ban Zone mode: `ban` or `mute <duration>`. Both modes clean the sender's messages from the last 24 hours across the whole server."
        },
        commands: ["/banzone • !banzone"]
      },
      {
        icon: "🧪", isCurrent: true,
        title: { vi: "Bandebug — Manager Access", en: "Bandebug — Manager Access" },
        description: {
          vi: "`/bandebug` giờ đây KHÔNG còn chỉ dành cho chủ bot. Server Manager (Administrator / Manage Server / Manage Channels) đều dùng được. Lệnh kiểm tra Nova có thể xử lý một thành viên theo thứ bậc vai trò và quy tắc Ban Zone hay không.",
          en: "`/bandebug` is no longer bot-owner-only. Server Managers (Administrator / Manage Server / Manage Channels) can now use it. It checks whether Nova can act on a member under the Ban Zone hierarchy and permission rules."
        },
        commands: ["/bandebug • !bandebug"]
      },
      {
        icon: "🤝", isCurrent: true,
        title: { vi: "Trust Prefix", en: "Trust Prefix" },
        description: {
          vi: "`/trust` giờ hỗ trợ cả prefix. Người dùng Trusted nhận quyền quản lý War/Backup theo hệ thống phân quyền của bot.",
          en: "`/trust` now supports both slash and prefix. Trusted users receive War/Backup management access according to the bot's permission system."
        },
        commands: ["/trust • !trust"]
      },
      {
        icon: "📊", isCurrent: true,
        title: { vi: "Serverinfo / Userinfo Prefix", en: "Serverinfo / Userinfo Prefix" },
        description: {
          vi: "Hai lệnh `/serverinfo` và `/userinfo` giờ có thêm bản prefix. Xem thông tin server hiện tại hoặc người dùng chỉ bằng cú pháp `!serverinfo`, `!userinfo @user`.",
          en: "`/serverinfo` and `/userinfo` now have prefix versions. View current-server or user information with `!serverinfo`, `!userinfo @user`."
        },
        commands: ["/serverinfo • !serverinfo", "/userinfo • !userinfo"]
      }
    ]
  }
];

/* ============================================================
   FEATURES
   ============================================================ */
const FEATURES = [
  {
    id: "ai", icon: "🤖",
    vi: {
      title: "AI Chatbot",
      short: "Trò chuyện với AI ngay trong Discord.",
      lead: "Chat với AI trực tiếp trong Discord, kèm lịch sử hội thoại riêng cho từng người dùng, tạo ảnh AI và persona tuỳ chỉnh.",
      details: [
        "AI chat trực tiếp trong Discord với mô hình công khai Qwen3.7-max.",
        "Mỗi người dùng có lịch sử hội thoại riêng, không ảnh hưởng lẫn nhau.",
        "AI Channel: bật bằng <code>/setai value:true</code> hoặc <code>!setai true</code>, tắt bằng <code>false</code>.",
        "Shared History: bật bằng <code>/setsharedhistory value:true</code> hoặc <code>!setsharedhistory true</code>, tắt bằng <code>false</code>.",
        "Persona cho phép đổi phong cách trả lời theo mã có sẵn hoặc mô tả tự do.",
        "Chọn ngôn ngữ trả lời AI (vi/en).",
        "Tạo ảnh AI từ mô tả văn bản. Cocolink là nhà cung cấp chính, Gemini làm dự phòng."
      ],
      perms: [
        "Send Messages và Embed Links trong kênh sử dụng.",
        "Read Message History (để xử lý ngữ cảnh hội thoại).",
        "Manage Channels — cho <code>setai</code> và <code>setsharedhistory</code>.",
        "Manage Webhooks nếu dùng tính năng AI Channel."
      ],
      examples: [
        "!chat Giải thích thuật toán sắp xếp nhanh bằng ví dụ đơn giản",
        "?image một phi hành gia mèo đang uống cà phê trên sao Hoả",
        "!persona custom: Trả lời ngắn gọn, thân thiện và dùng emoji",
        "!language vi",
        "/setai value:true",
        "!setsharedhistory true"
      ]
    },
    en: {
      title: "AI Chatbot",
      short: "Chat with AI directly inside Discord.",
      lead: "Chat with AI right inside Discord, with personal conversation history, AI image generation and custom personas.",
      details: [
        "AI chat directly inside Discord using the public model Qwen3.7-max.",
        "Every user keeps their own conversation history, isolated from others.",
        "AI Channel: enable with <code>/setai value:true</code> or <code>!setai true</code>; disable with <code>false</code>.",
        "Shared History: enable with <code>/setsharedhistory value:true</code> or <code>!setsharedhistory true</code>; disable with <code>false</code>.",
        "Personas let you change the reply style using built-in codes or a free-form description.",
        "Pick the AI reply language (vi/en).",
        "Generate AI images from text prompts. Cocolink is primary, Gemini is fallback."
      ],
      perms: [
        "Send Messages and Embed Links in the target channel.",
        "Read Message History (to process conversation context).",
        "Manage Channels — for <code>setai</code> and <code>setsharedhistory</code>.",
        "Manage Webhooks if the AI Channel feature is used."
      ],
      examples: [
        "!chat Explain quicksort with a simple example",
        "?image a cat astronaut drinking coffee on Mars",
        "!persona custom: Reply briefly, stay friendly and use emojis",
        "!language en",
        "/setai value:true",
        "!setsharedhistory true"
      ]
    },
    commands: [
      { name: "/chat • !chat", type: "both", vi: { d: "Trò chuyện với AI trong Discord.", p: "Send Messages" }, en: { d: "Chat with the AI inside Discord.", p: "Send Messages" }, ex: "!chat Xin chào Nova!" },
      { name: "/image • !image", type: "both", vi: { d: "Tạo ảnh AI từ mô tả văn bản.", p: "Send Messages, Attach Files" }, en: { d: "Generate an AI image from a text prompt.", p: "Send Messages, Attach Files" }, ex: "!image thành phố tương lai lúc hoàng hôn" },
      { name: "/clearchat • !clearchat", type: "both", vi: { d: "Xoá lịch sử hội thoại AI của riêng bạn.", p: "Send Messages" }, en: { d: "Clear your own AI conversation history.", p: "Send Messages" } },
      { name: "/setai • !setai", type: "both", isNew: true, vi: { d: "Bật/tắt AI mode cho kênh hiện tại. Dùng true|false.", p: "Manage Channels" }, en: { d: "Enable or disable AI mode for the current channel. Use true|false.", p: "Manage Channels" }, ex: "/setai value:true" },
      { name: "/setsharedhistory • !setsharedhistory", type: "both", isNew: true, vi: { d: "Bật/tắt lịch sử chat chung cho kênh. Dùng true|false.", p: "Manage Channels" }, en: { d: "Enable or disable shared chat history for the channel. Use true|false.", p: "Manage Channels" }, ex: "/setsharedhistory value:true" },
      { name: "/persona • !persona", type: "both", vi: { d: "Đổi persona AI theo mã có sẵn.", p: "Send Messages" }, en: { d: "Change AI persona using a built-in code.", p: "Send Messages" }, ex: "!persona teacher" },
      { name: "!persona custom: <description>", type: "prefix", vi: { d: "Tạo persona AI tuỳ chỉnh bằng mô tả tự do.", p: "Send Messages" }, en: { d: "Create a custom AI persona with a free-form description.", p: "Send Messages" }, ex: "!persona custom: Nói chuyện như một cố vấn thân thiện" },
      { name: "/mypersona • !mypersona", type: "both", vi: { d: "Xem persona AI hiện tại của bạn.", p: "Send Messages" }, en: { d: "View your current AI persona.", p: "Send Messages" } },
      { name: "/resetpersona • !resetpersona", type: "both", vi: { d: "Đưa persona AI về mặc định.", p: "Send Messages" }, en: { d: "Reset your AI persona to default.", p: "Send Messages" } },
      { name: "/language • !language", type: "both", vi: { d: "Đặt ngôn ngữ trả lời của AI cho bạn.", p: "Send Messages" }, en: { d: "Set the AI reply language for yourself.", p: "Send Messages" }, ex: "!language vi" }
    ]
  },
  {
    id: "moderation", icon: "🛡️",
    vi: {
      title: "Moderation",
      short: "Công cụ kiểm duyệt thành viên.",
      lead: "Bộ lệnh kiểm duyệt: ban, unban, timeout và gỡ timeout — kèm kiểm tra thứ bậc vai trò. Hỗ trợ cả Slash và Prefix.",
      details: [
        "<code>/ban • !ban</code> — cấm một thành viên khỏi server.",
        "<code>/unban • !unban</code> — bỏ cấm bằng User ID để nhận diện chính xác.",
        "<code>/mute • !mute</code> — timeout thành viên, thời lượng tối đa 28 ngày.",
        "<code>/unmute • !unmute</code> — gỡ timeout của thành viên.",
        "Bot cần thứ bậc vai trò cao hơn mục tiêu mới có thể hành động.",
        "Chủ server không thể bị bot ban."
      ],
      perms: [
        "Ban Members — cho <code>ban</code> và <code>unban</code>.",
        "Moderate Members — cho <code>mute</code> và <code>unmute</code>.",
        "Vai trò của bot phải nằm cao hơn vai trò của mục tiêu."
      ],
      examples: ["/ban user: @Spammer reason: Spam quảng cáo", "!ban @Spammer Spam quảng cáo", "/mute user: @Noisy duration: 10m reason: Spam chat", "!mute @Noisy 10m Spam chat", "/unban user_id: 123456789012345678"]
    },
    en: {
      title: "Moderation",
      short: "Member moderation toolkit.",
      lead: "A focused moderation set: ban, unban, timeout and untimeout — with proper role hierarchy checks. Works as both slash and prefix.",
      details: [
        "<code>/ban • !ban</code> — bans a member from the server.",
        "<code>/unban • !unban</code> — unbans a user by precise User ID.",
        "<code>/mute • !mute</code> — times out a member, maximum duration 28 days.",
        "<code>/unmute • !unmute</code> — removes a member's timeout.",
        "The bot needs a higher role than the target to act.",
        "The server owner can never be banned by the bot."
      ],
      perms: ["Ban Members — for <code>ban</code> and <code>unban</code>.", "Moderate Members — for <code>mute</code> and <code>unmute</code>.", "The bot's role must sit above the target's highest role."],
      examples: ["/ban user: @Spammer reason: Advertising spam", "!ban @Spammer Advertising spam", "/mute user: @Noisy duration: 10m reason: Chat spam", "!mute @Noisy 10m Chat spam", "/unban user_id: 123456789012345678"]
    },
    commands: [
      { name: "/ban • !ban", type: "both", isNew: true, vi: { d: "Ban thành viên được chọn khỏi server.", p: "Ban Members" }, en: { d: "Ban the selected member from the server.", p: "Ban Members" }, ex: "/ban user: @User reason: Spam" },
      { name: "/unban • !unban", type: "both", isNew: true, vi: { d: "Bỏ cấm người dùng bằng User ID.", p: "Ban Members" }, en: { d: "Unban a user using their User ID.", p: "Ban Members" }, ex: "/unban user_id: 123456789012345678" },
      { name: "/mute • !mute", type: "both", isNew: true, vi: { d: "Timeout thành viên. Thời lượng tối đa 28 ngày (10m, 2h, 7d).", p: "Moderate Members" }, en: { d: "Timeout a member. Max 28 days (10m, 2h, 7d).", p: "Moderate Members" }, ex: "/mute user: @User duration: 2h reason: Spam" },
      { name: "/unmute • !unmute", type: "both", isNew: true, vi: { d: "Gỡ timeout cho thành viên.", p: "Moderate Members" }, en: { d: "Remove a member's timeout.", p: "Moderate Members" }, ex: "/unmute user: @User" }
    ]
  },
  {
    id: "banzone", icon: "☠️",
    vi: {
      title: "Ban Zone",
      short: "Hệ thống bảo vệ server.",
      lead: "Ban Zone là hệ thống bảo vệ server: khi kênh bị xâm phạm, Nova xử lý người vi phạm theo chế độ đã cấu hình, kèm whitelist theo từng server và dọn tin nhắn 24 giờ.",
      details: [
        "Chế độ Ban: <code>/banzone ban</code> hoặc <code>!banzone ban</code>.",
        "Chế độ Mute: <code>/banzone mute duration:10m</code> hoặc <code>!banzone mute 10m</code>.",
        "Cả 2 chế độ đều dọn tin nhắn 24 giờ của người vi phạm trên toàn server.",
        "<code>/setbanchannel value:true|false</code> hoặc <code>!setbanchannel true|false</code> đặt kênh hiện tại làm kênh Ban Zone và bật/tắt.",
        "Whitelist theo từng server: whitelist ở Server A <strong>không</strong> ảnh hưởng Server B.",
        "Chỉ chủ server quản lý được whitelist Ban Zone qua <code>/banwhitelist</code>.",
        "<code>/bandebug</code> / <code>!bandebug</code> kiểm tra bot có thể hành động lên thành viên được chọn.",
        "Thứ bậc vai trò quan trọng — chủ server không thể bị bot ban.",
        "Cấu hình kênh được cô lập theo từng server.",
        "Bảo vệ xoá kênh: nếu kênh Ban Zone bị xoá, Nova tự khôi phục kênh và xử lý theo logic bảo vệ."
      ],
      perms: ["Manage Channels — để cấu hình kênh Ban Zone.", "Ban Members / Moderate Members — tuỳ chế độ đã chọn.", "Chỉ <strong>chủ server</strong> được quản lý whitelist Ban Zone.", "Bandebug: Manager (Administrator / Manage Server / Manage Channels)."],
      examples: ["/setbanchannel value:true", "!setbanchannel true", "/banzone ban", "!banzone ban", "/banzone mute duration:10m", "!banzone mute 10m", "/banwhitelist add @TrustedUser", "/bandebug @SomeUser", "!bandebug @SomeUser"]
    },
    en: {
      title: "Ban Zone",
      short: "Server protection system.",
      lead: "Ban Zone is a server protection system: when a channel is compromised, Nova processes offenders according to the configured mode, with a per-server whitelist and 24-hour message cleanup.",
      details: [
        "Ban Mode: <code>/banzone ban</code> or <code>!banzone ban</code>.",
        "Mute Mode: <code>/banzone mute duration:10m</code> or <code>!banzone mute 10m</code>.",
        "Both modes clean the offender's last-24-hour messages across the whole server.",
        "<code>/setbanchannel value:true|false</code> or <code>!setbanchannel true|false</code> sets the current channel as the Ban Zone channel and enables/disables it.",
        "Whitelist is per-server: a whitelist in Server A does <strong>not</strong> affect Server B.",
        "Only the server owner can manage the Ban Zone whitelist via <code>/banwhitelist</code>.",
        "<code>/bandebug</code> / <code>!bandebug</code> tests whether the bot can act on the selected member.",
        "Role hierarchy matters — the server owner can never be banned by the bot.",
        "Channel configuration is isolated per server.",
        "Channel deletion protection: if the Ban Zone channel is deleted, Nova recreates it and handles the executor according to its protection logic."
      ],
      perms: ["Manage Channels — to configure the Ban Zone channel.", "Ban Members / Moderate Members — depending on the selected mode.", "Only the <strong>server owner</strong> can manage the Ban Zone whitelist.", "Bandebug: Manager (Administrator / Manage Server / Manage Channels)."],
      examples: ["/setbanchannel value:true", "!setbanchannel true", "/banzone ban", "!banzone ban", "/banzone mute duration:10m", "!banzone mute 10m", "/banwhitelist add @TrustedUser", "/bandebug @SomeUser", "!bandebug @SomeUser"]
    },
    commands: [
      { name: "/setbanchannel • !setbanchannel", type: "both", isNew: true, vi: { d: "Bật/tắt Ban Zone cho kênh hiện tại bằng true|false.", p: "Server Owner" }, en: { d: "Enable or disable Ban Zone for the current channel with true|false.", p: "Server Owner" }, ex: "!setbanchannel true" },
      { name: "/banzone • !banzone", type: "both", isNew: true, vi: { d: "Chọn chế độ Ban Zone: ban hoặc mute <duration>.", p: "Server Owner" }, en: { d: "Choose Ban Zone mode: ban or mute <duration>.", p: "Server Owner" }, ex: "!banzone mute 10m" },
      { name: "/banwhitelist add|remove|list", type: "slash", vi: { d: "Quản lý whitelist Ban Zone của server (chỉ Server Owner).", p: "Server Owner" }, en: { d: "Manage the server's Ban Zone whitelist (Server Owner only).", p: "Server Owner" } },
      { name: "/bandebug • !bandebug", type: "both", isNew: true, vi: { d: "Kiểm tra bot có thể hành động lên thành viên được chọn theo Ban Zone.", p: "Manager" }, en: { d: "Test whether the bot can act on the selected member under Ban Zone rules.", p: "Manager" }, ex: "!bandebug @User" }
    ]
  },
  {
    id: "war", icon: "⚔️",
    vi: {
      title: "War Ping / Backup Ping",
      short: "Điều phối War và Backup.",
      lead: "Tạo yêu cầu War Ping hoặc Backup Ping, thu thập thông tin cần thiết và mở thread điều phối với các nút hành động.",
      details: [
        "War: tạo yêu cầu War Ping, thu thập enemy/clan, khu vực, link/mã server Roblox, và mở thread điều phối.",
        "Backup: tạo yêu cầu Backup Ping, thu thập thông tin cần thiết và mở thread điều phối.",
        "Nút hành động: <code>WAR</code>, <code>BACKUP</code>, <code>WIN</code>, <code>LOSE</code>, <code>END</code>.",
        "Có thể cấu hình quyền cho thành viên thường bấm nút kết quả.",
        "Kết thúc toàn bộ: <code>/end all</code> kết thúc mọi phiên War/Backup đang hoạt động.",
        "Call Hacker: <code>/callhacker show</code> và <code>/callhacker hide</code>.",
        "Vai trò cấu hình: War Ping Role, Backup Ping Role, Joined War Role, Joined Backup Role, Hacker Role.",
        "Trusted users: <code>/trust • !trust</code>."
      ],
      perms: ["Manage Roles — để cấu hình các vai trò War/Backup.", "Manage Channels / Manage Threads — để tạo thread điều phối.", "Quyền quản lý cần thiết cho <code>/callhacker</code> và <code>/trust</code>."],
      examples: ["/end all", "/callhacker show", "/callhacker hide", "!trust add @User", "/trust list"]
    },
    en: {
      title: "War Ping / Backup Ping",
      short: "War and Backup coordination.",
      lead: "Create War Ping or Backup Ping requests, collect required information and open a coordination thread with action buttons.",
      details: [
        "War: create a War Ping request, collect enemy/clan, region, Roblox server link/code, and open a coordination thread.",
        "Backup: create a Backup Ping request, collect the required information, and open a coordination thread.",
        "Action buttons: <code>WAR</code>, <code>BACKUP</code>, <code>WIN</code>, <code>LOSE</code>, <code>END</code>.",
        "Configurable permission for regular members pressing the result buttons.",
        "Global ending: <code>/end all</code> ends all active War/Backup sessions.",
        "Call Hacker: <code>/callhacker show</code> and <code>/callhacker hide</code>.",
        "Configurable roles: War Ping Role, Backup Ping Role, Joined War Role, Joined Backup Role, Hacker Role.",
        "Trusted users: <code>/trust • !trust</code>."
      ],
      perms: ["Manage Roles — to configure the War/Backup roles.", "Manage Channels / Manage Threads — to create coordination threads.", "Manager-level permissions for <code>/callhacker</code> and <code>/trust</code>."],
      examples: ["/end all", "/callhacker show", "/callhacker hide", "!trust add @User", "/trust list"]
    },
    commands: [
      { name: "WAR", type: "button", vi: { d: "Nút tạo yêu cầu War Ping.", p: "Configurable" }, en: { d: "Button to create a War Ping request.", p: "Configurable" } },
      { name: "BACKUP", type: "button", vi: { d: "Nút tạo yêu cầu Backup Ping.", p: "Configurable" }, en: { d: "Button to create a Backup Ping request.", p: "Configurable" } },
      { name: "WIN", type: "button", vi: { d: "Đánh dấu kết quả là thắng.", p: "Configurable" }, en: { d: "Mark the result as a win.", p: "Configurable" } },
      { name: "LOSE", type: "button", vi: { d: "Đánh dấu kết quả là thua.", p: "Configurable" }, en: { d: "Mark the result as a loss.", p: "Configurable" } },
      { name: "END", type: "button", vi: { d: "Kết thúc phiên hiện tại.", p: "Configurable" }, en: { d: "End the current session.", p: "Configurable" } },
      { name: "/end all", type: "slash", vi: { d: "Kết thúc mọi phiên War/Backup đang hoạt động trong server.", p: "Manage Threads" }, en: { d: "End all active War/Backup sessions in the server.", p: "Manage Threads" } },
      { name: "/trust • !trust", type: "both", isNew: true, vi: { d: "Quản lý danh sách Trusted (add / remove / list).", p: "Manager" }, en: { d: "Manage the Trusted list (add / remove / list).", p: "Manager" }, ex: "!trust add @User" },
      { name: "/helppanel", type: "slash", vi: { d: "Gửi bảng hướng dẫn War/Backup vào kênh.", p: "Manage Channels" }, en: { d: "Send the War/Backup help panel to a channel.", p: "Manage Channels" } },
      { name: "/callhacker show", type: "slash", vi: { d: "Hiện nút Call Hacker.", p: "Manager" }, en: { d: "Show the Call Hacker button.", p: "Manager" } },
      { name: "/callhacker hide", type: "slash", vi: { d: "Ẩn nút Call Hacker.", p: "Manager" }, en: { d: "Hide the Call Hacker button.", p: "Manager" } }
    ]
  },
  {
    id: "event", icon: "🏆",
    vi: {
      title: "Tạo event",
      short: "Tạo và quản lý sự kiện.",
      lead: "Gửi sự kiện, quản lý người tham gia và blacklist — tất cả qua nhóm lệnh <code>/event</code>.",
      details: [
        "<code>/event send</code> gửi và tạo sự kiện trong server.",
        "<code>/event test</code> kiểm tra hệ thống sự kiện.",
        "<code>/event participants</code> xem danh sách người tham gia.",
        "<code>/event count</code> đếm số người tham gia.",
        "<code>/event remove</code> xoá một người tham gia.",
        "<code>/event clear</code> xoá dữ liệu/người tham gia khi phù hợp.",
        "Blacklist: <code>/event blacklist add</code>, <code>/event blacklist remove</code>, <code>/event blacklist list</code>."
      ],
      perms: ["Manage Events / Manage Channels — để gửi và quản lý sự kiện.", "Quyền quản lý cần thiết để dùng blacklist sự kiện."],
      examples: ["/event send title: Giải đấu cuối tuần", "/event participants", "/event count", "/event blacklist add @User"]
    },
    en: {
      title: "Create events",
      short: "Create and manage events.",
      lead: "Send events, manage participants and blacklist — all through the <code>/event</code> command group.",
      details: [
        "<code>/event send</code> sends and creates an event in the server.",
        "<code>/event test</code> tests the event system.",
        "<code>/event participants</code> views the participant list.",
        "<code>/event count</code> counts participants.",
        "<code>/event remove</code> removes a participant.",
        "<code>/event clear</code> clears event participants/data when applicable.",
        "Blacklist: <code>/event blacklist add</code>, <code>/event blacklist remove</code>, <code>/event blacklist list</code>."
      ],
      perms: ["Manage Events / Manage Channels — to send and manage events.", "Manager-level permissions to use the event blacklist."],
      examples: ["/event send title: Weekend Tournament", "/event participants", "/event count", "/event blacklist add @User"]
    },
    commands: [
      { name: "/event send", type: "slash", vi: { d: "Gửi và tạo sự kiện.", p: "Manage Events" }, en: { d: "Send and create an event.", p: "Manage Events" } },
      { name: "/event test", type: "slash", vi: { d: "Kiểm tra hệ thống sự kiện.", p: "Manage Events" }, en: { d: "Test the event system.", p: "Manage Events" } },
      { name: "/event participants", type: "slash", vi: { d: "Xem danh sách người tham gia.", p: "Manage Events" }, en: { d: "View the participant list.", p: "Manage Events" } },
      { name: "/event count", type: "slash", vi: { d: "Đếm số người tham gia.", p: "Manage Events" }, en: { d: "Count participants.", p: "Manage Events" } },
      { name: "/event remove", type: "slash", vi: { d: "Xoá một người tham gia.", p: "Manage Events" }, en: { d: "Remove a participant.", p: "Manage Events" } },
      { name: "/event clear", type: "slash", vi: { d: "Xoá dữ liệu/người tham gia sự kiện khi phù hợp.", p: "Manage Events" }, en: { d: "Clear event participants/data when applicable.", p: "Manage Events" } },
      { name: "/event blacklist add", type: "slash", vi: { d: "Thêm người dùng vào blacklist sự kiện.", p: "Manager" }, en: { d: "Add a user to the event blacklist.", p: "Manager" } },
      { name: "/event blacklist remove", type: "slash", vi: { d: "Xoá người dùng khỏi blacklist sự kiện.", p: "Manager" }, en: { d: "Remove a user from the event blacklist.", p: "Manager" } },
      { name: "/event blacklist list", type: "slash", vi: { d: "Xem blacklist sự kiện.", p: "Manager" }, en: { d: "View the event blacklist.", p: "Manager" } }
    ]
  },
  {
    id: "serverinfo", icon: "📊",
    vi: {
      title: "Server Information",
      short: "Thông tin bot, server và người dùng.",
      lead: "Nhóm lệnh thông tin giúp bạn xem chi tiết về bot, server và thành viên — cả bản slash và prefix.",
      details: [
        "<code>/info</code> và <code>!info</code> cùng mở bảng thông tin bot.",
        "Bảng thông tin bot gồm: tên bot, Bot ID, chủ sở hữu, thời gian tạo, độ trễ, uptime, phiên bản Python, phiên bản discord.py, tổng server, tổng người dùng, tổng kênh.",
        "Bảng còn hiển thị: trạng thái AI, mô hình AI, số phiên War đang hoạt động, số phiên Backup đang hoạt động, trusted users, kênh Ban Zone, số lượng whitelist Ban Zone, kênh Help, chế độ Ban Zone, số slash command, số prefix command.",
        "<code>/serverinfo</code> / <code>!serverinfo</code>: tên server, Server ID, chủ sở hữu, số thành viên, kênh, vai trò, boost, xác minh, tính năng, icon/banner.",
        "<code>/userinfo</code> / <code>!userinfo</code>: thông tin người dùng, ngày tạo tài khoản, ngày tham gia server, vai trò, trạng thái, nền tảng, hoạt động, biệt danh, boost, trạng thái timeout."
      ],
      perms: ["Send Messages và Embed Links trong kênh sử dụng.", "Không yêu cầu quyền quản lý."],
      examples: ["/info", "!info", "/serverinfo", "!serverinfo", "/userinfo user: @Member", "!userinfo @Member"]
    },
    en: {
      title: "Server Information",
      short: "Bot, server and user information.",
      lead: "Information commands to inspect the bot, server and members — both slash and prefix versions.",
      details: [
        "<code>/info</code> and <code>!info</code> both open the bot information panel.",
        "The bot information panel includes: bot name, Bot ID, owner, creation time, latency, uptime, Python version, discord.py version, total servers, total users, total channels.",
        "Also shows: AI status, AI model, active War sessions, active Backup sessions, trusted users, Ban Zone channel, Ban whitelist count, Help channel, Ban Zone mode, slash command count, prefix command count.",
        "<code>/serverinfo</code> / <code>!serverinfo</code>: server name, Server ID, owner, member counts, channels, roles, boosts, verification, features, icon/banner.",
        "<code>/userinfo</code> / <code>!userinfo</code>: user information, account creation, server join, roles, status, platform, activity, nickname, boost, timeout status."
      ],
      perms: ["Send Messages and Embed Links in the target channel.", "No management permission required."],
      examples: ["/info", "!info", "/serverinfo", "!serverinfo", "/userinfo user: @Member", "!userinfo @Member"]
    },
    commands: [
      { name: "/info • !info", type: "both", isNew: true, vi: { d: "Xem Nova và thông tin server hiện tại.", p: "Send Messages" }, en: { d: "View Nova and current-server information.", p: "Send Messages" }, ex: "!info" },
      { name: "/serverinfo • !serverinfo", type: "both", isNew: true, vi: { d: "Xem thông tin server hiện tại.", p: "Send Messages" }, en: { d: "View current-server information.", p: "Send Messages" }, ex: "!serverinfo" },
      { name: "/userinfo • !userinfo", type: "both", isNew: true, vi: { d: "Xem thông tin người dùng.", p: "Send Messages" }, en: { d: "View user information.", p: "Send Messages" }, ex: "!userinfo @Member" }
    ]
  },
  {
    id: "config", icon: "⚙️",
    vi: {
      title: "Configuration",
      short: "Cấu hình server.",
      lead: "Cấu hình kênh, vai trò và các thiết lập mà hệ thống War/Backup và Help sử dụng.",
      details: [
        "<code>/config view</code> xem toàn bộ cấu hình hiện tại.",
        "<code>/config help_channel</code> đặt kênh nhận bảng hướng dẫn.",
        "<code>/config war_ping_role</code> đặt vai trò được ping cho War.",
        "<code>/config backup_ping_role</code> đặt vai trò được ping cho Backup.",
        "<code>/config joined_war_role</code> đặt vai trò cấp cho người tham gia War.",
        "<code>/config joined_backup_role</code> đặt vai trò cấp cho người tham gia Backup.",
        "<code>/config hacker_role</code> đặt vai trò cho Call Hacker."
      ],
      perms: ["Manage Server / Manage Roles — để thay đổi cấu hình.", "Manage Channels — để đặt kênh help."],
      examples: ["/config view", "/config war_ping_role role: @WarPing", "/config help_channel channel: #help"]
    },
    en: {
      title: "Configuration",
      short: "Server configuration.",
      lead: "Configure channels, roles and the settings used by the War/Backup and Help systems.",
      details: [
        "<code>/config view</code> shows the server's current configuration.",
        "<code>/config help_channel</code> sets the channel that receives the help panel.",
        "<code>/config war_ping_role</code> sets the role pinged for War.",
        "<code>/config backup_ping_role</code> sets the role pinged for Backup.",
        "<code>/config joined_war_role</code> sets the role granted to War participants.",
        "<code>/config joined_backup_role</code> sets the role granted to Backup participants.",
        "<code>/config hacker_role</code> sets the role for Call Hacker."
      ],
      perms: ["Manage Server / Manage Roles — to change configuration.", "Manage Channels — to set the help channel."],
      examples: ["/config view", "/config war_ping_role role: @WarPing", "/config help_channel channel: #help"]
    },
    commands: [
      { name: "/config view", type: "slash", vi: { d: "Xem cấu hình hiện tại của server.", p: "Manage Server" }, en: { d: "View the server's current configuration.", p: "Manage Server" } },
      { name: "/config help_channel", type: "slash", vi: { d: "Đặt kênh nhận bảng hướng dẫn.", p: "Manage Channels" }, en: { d: "Set the channel that receives the help panel.", p: "Manage Channels" } },
      { name: "/config war_ping_role", type: "slash", vi: { d: "Đặt vai trò War Ping.", p: "Manage Roles" }, en: { d: "Set the War Ping role.", p: "Manage Roles" } },
      { name: "/config backup_ping_role", type: "slash", vi: { d: "Đặt vai trò Backup Ping.", p: "Manage Roles" }, en: { d: "Set the Backup Ping role.", p: "Manage Roles" } },
      { name: "/config joined_war_role", type: "slash", vi: { d: "Đặt vai trò cho người tham gia War.", p: "Manage Roles" }, en: { d: "Set the role for War participants.", p: "Manage Roles" } },
      { name: "/config joined_backup_role", type: "slash", vi: { d: "Đặt vai trò cho người tham gia Backup.", p: "Manage Roles" }, en: { d: "Set the role for Backup participants.", p: "Manage Roles" } },
      { name: "/config hacker_role", type: "slash", vi: { d: "Đặt vai trò Call Hacker.", p: "Manage Roles" }, en: { d: "Set the Call Hacker role.", p: "Manage Roles" } }
    ]
  },
  {
    id: "help", icon: "📖",
    vi: {
      title: "Help System",
      short: "Hệ thống trợ giúp.",
      lead: "<code>!help</code> mở Help Menu chính. <code>!help &lt;feature&gt;</code> chỉ hiển thị hướng dẫn chi tiết của riêng tính năng đó.",
      details: [
        "<code>/help • !help</code> mở Help Menu chính theo danh mục.",
        "<code>!help &lt;feature&gt;</code> chỉ hiển thị hướng dẫn chi tiết của tính năng được yêu cầu — không hiển thị toàn bộ danh mục.",
        "Ví dụ: <code>!help chat</code>, <code>!help info</code>, <code>!help ban</code>, <code>!help mute</code>, <code>!help warping</code>, <code>!help prefix</code>, <code>!help bandebug</code>."
      ],
      perms: ["Send Messages trong kênh sử dụng."],
      examples: ["!help", "/help", "!help chat", "!help info", "!help prefix", "!help bandebug"]
    },
    en: {
      title: "Help System",
      short: "Help system.",
      lead: "<code>!help</code> opens the main Help Menu. <code>!help &lt;feature&gt;</code> shows only the detailed help for that specific feature.",
      details: [
        "<code>/help • !help</code> opens the main Categories Help Menu.",
        "<code>!help &lt;feature&gt;</code> shows only the detailed help for the requested feature — the entire category is not shown.",
        "Examples: <code>!help chat</code>, <code>!help info</code>, <code>!help ban</code>, <code>!help mute</code>, <code>!help warping</code>, <code>!help prefix</code>, <code>!help bandebug</code>."
      ],
      perms: ["Send Messages in the target channel."],
      examples: ["!help", "/help", "!help chat", "!help info", "!help prefix", "!help bandebug"]
    },
    commands: [
      { name: "/help • !help", type: "both", vi: { d: "Mở Help Menu chính theo danh mục.", p: "Send Messages" }, en: { d: "Open the main Categories Help Menu.", p: "Send Messages" } },
      { name: "!help <feature>", type: "prefix", vi: { d: "Chỉ hiển thị hướng dẫn chi tiết của một tính năng cụ thể.", p: "Send Messages" }, en: { d: "Show only the detailed help for one specific feature.", p: "Send Messages" }, ex: "!help info" }
    ]
  },
  {
    id: "prefix", icon: "🔧",
    vi: {
      title: "Prefix riêng từng server",
      short: "Dùng prefix khác nhau cho mỗi server.",
      lead: "Mỗi server Discord có thể dùng prefix riêng. Prefix mặc định là <code>!</code>. Dùng <code>!prefix ?</code> để đổi thành <code>?</code>.",
      details: [
        "Mặc định prefix là <code>!</code>.",
        "Đổi prefix bằng <code>!prefix &lt;ký tự&gt;</code>.",
        "Ví dụ: <code>!prefix ?</code> → sau đó dùng <code>?chat</code>, <code>?info</code>, <code>?help</code>, <code>?image</code>, <code>?ban</code>.",
        "Server khác có thể dùng <code>!prefix .</code> → <code>.chat</code>, <code>.info</code>, <code>.help</code>, <code>.ban</code>.",
        "Mỗi server (Guild) có prefix riêng, không ảnh hưởng lẫn nhau.",
        "DM vẫn dùng mặc định <code>!</code>.",
        "Prefix được lưu lại sau khi bot khởi động lại."
      ],
      perms: ["<strong>KHÔNG</strong> chỉ dành cho chủ bot.", "Administrator, Manage Server hoặc Manage Channels trong server đều dùng được.", "Quyền thuộc về server Discord, không phải chủ bot."],
      examples: ["!prefix ?", "?chat", "?info", "?help", "?ban"]
    },
    en: {
      title: "Custom Server Prefix",
      short: "Use a different prefix in each Discord server.",
      lead: "Each Discord server can use its own prefix. The default prefix is <code>!</code>. Use <code>!prefix ?</code> to change it to <code>?</code>.",
      details: [
        "Default prefix is <code>!</code>.",
        "Change the prefix with <code>!prefix &lt;char&gt;</code>.",
        "Example: <code>!prefix ?</code> → then use <code>?chat</code>, <code>?info</code>, <code>?help</code>, <code>?image</code>, <code>?ban</code>.",
        "Another server can use <code>!prefix .</code> → <code>.chat</code>, <code>.info</code>, <code>.help</code>, <code>.ban</code>.",
        "Each Guild has its own prefix and does not affect other servers.",
        "DM uses the default <code>!</code>.",
        "The prefix is saved after bot restart."
      ],
      perms: ["NOT bot-owner-only.", "Administrator, Manage Server or Manage Channels in the server can use it.", "The permission belongs to the Discord server, not the bot owner."],
      examples: ["!prefix ?", "?chat", "?info", "?help", "?ban"]
    },
    commands: [
      { name: "!prefix", type: "prefix", isNew: true, vi: { d: "Đổi prefix của server hiện tại. Ví dụ: !prefix ?", p: "Administrator / Manage Server / Manage Channels" }, en: { d: "Change the current server's prefix. Example: !prefix ?", p: "Administrator / Manage Server / Manage Channels" }, ex: "!prefix ?" }
    ]
  }
];

/* ============================================================
   HELP MENU CATEGORIES
   ============================================================ */
const HELP_CATEGORIES = [
  {
    id: "ai", icon: "🤖",
    vi: { name: "AI Chatbot", desc: "Chat với AI (Qwen) ngay trong kênh" },
    en: { name: "AI Chatbot", desc: "Chat with AI (Qwen) right in the channel" },
    viBody: {
      title: "AI Chatbot",
      text: "Chat với AI trực tiếp trong Discord, kèm lịch sử hội thoại riêng, tạo ảnh AI và persona tuỳ chỉnh.",
      cmds: ["/chat • !chat", "/image • !image", "/setai • !setai", "/setsharedhistory • !setsharedhistory", "/clearchat • !clearchat", "/persona • !persona", "/mypersona • !mypersona", "/resetpersona • !resetpersona", "/language • !language"],
      note: "Mô hình công khai: Qwen3.7-max. Cocolink là nhà cung cấp ảnh chính, Gemini làm dự phòng."
    },
    enBody: {
      title: "AI Chatbot",
      text: "Chat with AI inside Discord, with personal conversation history, AI image generation and custom personas.",
      cmds: ["/chat • !chat", "/image • !image", "/setai • !setai", "/setsharedhistory • !setsharedhistory", "/clearchat • !clearchat", "/persona • !persona", "/mypersona • !mypersona", "/resetpersona • !resetpersona", "/language • !language"],
      note: "Public model: Qwen3.7-max. Cocolink is primary image provider, Gemini is fallback."
    }
  },
  {
    id: "war", icon: "⚔️",
    vi: { name: "War Ping / Backup Ping", desc: "Gọi người vào war hoặc gọi backup" },
    en: { name: "War Ping / Backup Ping", desc: "Call people into a war or call for backup" },
    viBody: {
      title: "War Ping / Backup Ping",
      text: "Tạo yêu cầu War hoặc Backup, mở thread điều phối với các nút hành động.",
      cmds: ["WAR", "BACKUP", "WIN", "LOSE", "END", "/end all", "/trust • !trust", "/helppanel", "/callhacker show", "/callhacker hide"],
      note: "Vai trò cấu hình: War Ping Role, Backup Ping Role, Joined War Role, Joined Backup Role, Hacker Role."
    },
    enBody: {
      title: "War Ping / Backup Ping",
      text: "Create a War or Backup request and open a coordination thread with action buttons.",
      cmds: ["WAR", "BACKUP", "WIN", "LOSE", "END", "/end all", "/trust • !trust", "/helppanel", "/callhacker show", "/callhacker hide"],
      note: "Configurable roles: War Ping Role, Backup Ping Role, Joined War Role, Joined Backup Role, Hacker Role."
    }
  },
  {
    id: "event", icon: "🏆",
    vi: { name: "Event", desc: "Tạo sự kiện" },
    en: { name: "Event", desc: "Create events" },
    viBody: {
      title: "Tạo event",
      text: "Gửi sự kiện, quản lý người tham gia và blacklist sự kiện.",
      cmds: ["/event send", "/event test", "/event participants", "/event count", "/event remove", "/event clear", "/event blacklist add", "/event blacklist remove", "/event blacklist list"],
      note: "Cần quyền Manage Events để gửi và quản lý sự kiện."
    },
    enBody: {
      title: "Create events",
      text: "Send events, manage participants and the event blacklist.",
      cmds: ["/event send", "/event test", "/event participants", "/event count", "/event remove", "/event clear", "/event blacklist add", "/event blacklist remove", "/event blacklist list"],
      note: "Manage Events permission is required to send and manage events."
    }
  },
  {
    id: "banzone", icon: "☠️",
    vi: { name: "Ban Channel", desc: "Kênh auto-ban, whitelist người được miễn ban" },
    en: { name: "Ban Channel", desc: "Auto-ban channel, whitelist users exempt from ban" },
    viBody: {
      title: "Ban Zone",
      text: "Hệ thống bảo vệ server: khi kênh bị xâm phạm, Nova xử lý người vi phạm theo chế độ đã cấu hình.",
      cmds: ["/setbanchannel • !setbanchannel", "/banzone • !banzone", "/banwhitelist add|remove|list", "/bandebug • !bandebug"],
      note: "Whitelist theo từng server và chỉ chủ server quản lý được. Bandebug dùng được bởi Manager."
    },
    enBody: {
      title: "Ban Zone",
      text: "Server protection system: when a channel is compromised, Nova processes offenders according to the configured mode.",
      cmds: ["/setbanchannel • !setbanchannel", "/banzone • !banzone", "/banwhitelist add|remove|list", "/bandebug • !bandebug"],
      note: "The whitelist is per-server and only the server owner can manage it. Bandebug is Manager-accessible."
    }
  },
  {
    id: "serverinfo", icon: "📊",
    vi: { name: "Server Information", desc: "Thông tin bot, server và người dùng" },
    en: { name: "Server Information", desc: "Bot, server and user information" },
    viBody: {
      title: "Server Information",
      text: "Xem thông tin bot, server hiện tại và người dùng.",
      cmds: ["/info • !info", "/serverinfo • !serverinfo", "/userinfo • !userinfo"],
      note: "`/info` và `!info` cung cấp cùng một bảng thông tin."
    },
    enBody: {
      title: "Server Information",
      text: "View bot, current-server and user information.",
      cmds: ["/info • !info", "/serverinfo • !serverinfo", "/userinfo • !userinfo"],
      note: "`/info` and `!info` provide the same information panel."
    }
  },
  {
    id: "prefix", icon: "🔧",
    vi: { name: "Prefix riêng từng server", desc: "Đổi prefix riêng cho mỗi server" },
    en: { name: "Custom Server Prefix", desc: "Set a different prefix per server" },
    viBody: {
      title: "Prefix riêng từng server",
      text: "Mỗi server Discord có thể dùng prefix riêng. Mặc định là `!`. Dùng `!prefix ?` để đổi.",
      cmds: ["!prefix", "!prefix ?", "!prefix ."],
      note: "Không chỉ dành cho chủ bot. Cần quyền Administrator / Manage Server / Manage Channels."
    },
    enBody: {
      title: "Custom Server Prefix",
      text: "Each Discord server can use its own prefix. Default is `!`. Use `!prefix ?` to change it.",
      cmds: ["!prefix", "!prefix ?", "!prefix ."],
      note: "Not bot-owner-only. Requires Administrator / Manage Server / Manage Channels."
    }
  }
];

/* ============================================================
   !help <feature>
   ============================================================ */
const HELP_FEATURES = {
  chat: { icon: "🤖",
    vi: { title: "/chat • !chat", body: "Trò chuyện với AI trực tiếp trong Discord. Mỗi người dùng có lịch sử hội thoại riêng.", cmds: ["/chat • !chat"], perm: "Send Messages" },
    en: { title: "/chat • !chat", body: "Chat with the AI directly inside Discord. Each user keeps their own conversation history.", cmds: ["/chat • !chat"], perm: "Send Messages" } },
  info: { icon: "ℹ️", isNew: true,
    vi: { title: "/info • !info", body: "`!info` hoặc `/info` — Xem Nova và thông tin server hiện tại. Bao gồm uptime, độ trễ, AI, War/Backup, Ban Zone và chi tiết server.", cmds: ["/info • !info"], perm: "Send Messages" },
    en: { title: "/info • !info", body: "`!info` or `/info` — View Nova and current-server information. Includes uptime, latency, AI, War/Backup, Ban Zone and server details.", cmds: ["/info • !info"], perm: "Send Messages" } },
  prefix: { icon: "🔧", isNew: true,
    vi: { title: "!prefix", body: "Đổi prefix của server hiện tại. Ví dụ: `!prefix ?` → sau đó dùng `?chat`, `?info`. Không chỉ dành cho chủ bot — cần quyền quản lý server.", cmds: ["!prefix"], perm: "Administrator / Manage Server / Manage Channels" },
    en: { title: "!prefix", body: "Change the current server's prefix. Example: `!prefix ?` → then use `?chat`, `?info`. Not bot-owner-only — requires server management permissions.", cmds: ["!prefix"], perm: "Administrator / Manage Server / Manage Channels" } },
  ban: { icon: "🔨", isNew: true,
    vi: { title: "/ban • !ban", body: "Ban thành viên được chọn khỏi server. Bot cần quyền Ban Members và vai trò cao hơn mục tiêu.", cmds: ["/ban • !ban"], perm: "Ban Members" },
    en: { title: "/ban • !ban", body: "Ban the selected member from the server. The bot needs Ban Members and a higher role than the target.", cmds: ["/ban • !ban"], perm: "Ban Members" } },
  unban: { icon: "🔓", isNew: true,
    vi: { title: "/unban • !unban", body: "Bỏ cấm người dùng bằng User ID. Cần quyền Ban Members.", cmds: ["/unban • !unban"], perm: "Ban Members" },
    en: { title: "/unban • !unban", body: "Unban a user using their User ID. Requires Ban Members.", cmds: ["/unban • !unban"], perm: "Ban Members" } },
  mute: { icon: "🔇", isNew: true,
    vi: { title: "/mute • !mute", body: "Timeout thành viên. Thời lượng tối đa 28 ngày. Ví dụ: 10m, 2h, 7d. Cần quyền Moderate Members.", cmds: ["/mute • !mute"], perm: "Moderate Members" },
    en: { title: "/mute • !mute", body: "Timeout a member. Maximum duration is 28 days. Examples: 10m, 2h, 7d. Requires Moderate Members.", cmds: ["/mute • !mute"], perm: "Moderate Members" } },
  unmute: { icon: "🔊", isNew: true,
    vi: { title: "/unmute • !unmute", body: "Gỡ timeout cho thành viên. Cần quyền Moderate Members.", cmds: ["/unmute • !unmute"], perm: "Moderate Members" },
    en: { title: "/unmute • !unmute", body: "Remove a member's timeout. Requires Moderate Members.", cmds: ["/unmute • !unmute"], perm: "Moderate Members" } },
  warping: { icon: "⚔️",
    vi: { title: "War Ping / Backup Ping", body: "Tạo yêu cầu War/Backup, mở thread điều phối và dùng các nút WAR/BACKUP/WIN/LOSE/END.", cmds: ["WAR", "BACKUP", "WIN", "LOSE", "END", "/end all"], perm: "Manage Threads" },
    en: { title: "War Ping / Backup Ping", body: "Create a War/Backup request, open a coordination thread and use the WAR/BACKUP/WIN/LOSE/END buttons.", cmds: ["WAR", "BACKUP", "WIN", "LOSE", "END", "/end all"], perm: "Manage Threads" } },
  image: { icon: "🎨",
    vi: { title: "/image • !image", body: "Tạo ảnh AI từ mô tả văn bản. Cocolink là nhà cung cấp chính, Gemini làm dự phòng.", cmds: ["/image • !image"], perm: "Send Messages, Attach Files" },
    en: { title: "/image • !image", body: "Generate an AI image from a text prompt. Cocolink is primary, Gemini is fallback.", cmds: ["/image • !image"], perm: "Send Messages, Attach Files" } },
  event: { icon: "🏆",
    vi: { title: "/event", body: "Gửi sự kiện, xem người tham gia, đếm, xoá và quản lý blacklist sự kiện.", cmds: ["/event send", "/event participants", "/event count", "/event blacklist list"], perm: "Manage Events" },
    en: { title: "/event", body: "Send events, view participants, count, remove and manage the event blacklist.", cmds: ["/event send", "/event participants", "/event count", "/event blacklist list"], perm: "Manage Events" } },
  banzone: { icon: "☠️", isNew: true,
    vi: { title: "Ban Zone", body: "Hệ thống bảo vệ server. Whitelist theo từng server, chỉ chủ server quản lý được. `/banzone` và `!banzone` hỗ trợ cả ban và mute.", cmds: ["/banzone • !banzone", "/setbanchannel • !setbanchannel", "/banwhitelist", "/bandebug • !bandebug"], perm: "Server Owner / Manager" },
    en: { title: "Ban Zone", body: "Server protection system. Whitelist is per-server and only the server owner can manage it. `/banzone` and `!banzone` support both ban and mute.", cmds: ["/banzone • !banzone", "/setbanchannel • !setbanchannel", "/banwhitelist", "/bandebug • !bandebug"], perm: "Server Owner / Manager" } },
  setbanchannel: { icon: "🚫", isNew: true,
    vi: { title: "/setbanchannel • !setbanchannel", body: "Bật/tắt Ban Zone cho kênh hiện tại bằng `true` hoặc `false`. Chỉ Server Owner dùng được.", cmds: ["/setbanchannel • !setbanchannel"], perm: "Server Owner" },
    en: { title: "/setbanchannel • !setbanchannel", body: "Enable or disable Ban Zone for the current channel with `true` or `false`. Server Owner only.", cmds: ["/setbanchannel • !setbanchannel"], perm: "Server Owner" } },
  bandebug: { icon: "🧪", isNew: true,
    vi: { title: "/bandebug • !bandebug", body: "Kiểm tra Nova có thể xử lý một thành viên theo thứ bậc vai trò và quy tắc Ban Zone hay không. Dùng được bởi Manager (Administrator / Manage Server / Manage Channels).", cmds: ["/bandebug • !bandebug"], perm: "Manager" },
    en: { title: "/bandebug • !bandebug", body: "Check whether Nova can act on a member under the Ban Zone role hierarchy and permission rules. Manager-accessible (Administrator / Manage Server / Manage Channels).", cmds: ["/bandebug • !bandebug"], perm: "Manager" } },
  trust: { icon: "🤝", isNew: true,
    vi: { title: "/trust • !trust", body: "Quản lý người dùng Trusted. Người dùng Trusted nhận quyền quản lý War/Backup theo hệ thống phân quyền của bot.", cmds: ["/trust • !trust"], perm: "Manager" },
    en: { title: "/trust • !trust", body: "Manage Trusted users. Trusted users receive War/Backup management access according to the bot's permission system.", cmds: ["/trust • !trust"], perm: "Manager" } },
  persona: { icon: "🎭",
    vi: { title: "Persona", body: "Đổi phong cách trả lời của AI theo mã có sẵn hoặc mô tả tự do.", cmds: ["/persona • !persona", "!persona custom: <description>", "/mypersona • !mypersona", "/resetpersona • !resetpersona"], perm: "Send Messages" },
    en: { title: "Persona", body: "Change the AI reply style using a built-in code or a free-form description.", cmds: ["/persona • !persona", "!persona custom: <description>", "/mypersona • !mypersona", "/resetpersona • !resetpersona"], perm: "Send Messages" } },
  config: { icon: "⚙️",
    vi: { title: "/config", body: "Cấu hình kênh và vai trò cho hệ thống War/Backup và Help.", cmds: ["/config view", "/config help_channel", "/config war_ping_role", "/config backup_ping_role"], perm: "Manage Server / Manage Roles" },
    en: { title: "/config", body: "Configure channels and roles for the War/Backup and Help systems.", cmds: ["/config view", "/config help_channel", "/config war_ping_role", "/config backup_ping_role"], perm: "Manage Server / Manage Roles" } },
  help: { icon: "📖",
    vi: { title: "/help • !help", body: "`!help` mở Help Menu chính. `!help <feature>` chỉ hiển thị hướng dẫn chi tiết của tính năng đó.", cmds: ["/help • !help", "!help <feature>"], perm: "Send Messages" },
    en: { title: "/help • !help", body: "`!help` opens the main Categories Help Menu. `!help <feature>` shows only that feature's detailed help.", cmds: ["/help • !help", "!help <feature>"], perm: "Send Messages" } },
  serverinfo: { icon: "📊", isNew: true,
    vi: { title: "/serverinfo • !serverinfo", body: "Xem thông tin server: tên, ID, chủ sở hữu, thành viên, kênh, vai trò, boost, xác minh, tính năng, icon/banner.", cmds: ["/serverinfo • !serverinfo"], perm: "Send Messages" },
    en: { title: "/serverinfo • !serverinfo", body: "View server information: name, ID, owner, members, channels, roles, boosts, verification, features, icon/banner.", cmds: ["/serverinfo • !serverinfo"], perm: "Send Messages" } },
  userinfo: { icon: "👤", isNew: true,
    vi: { title: "/userinfo • !userinfo", body: "Xem thông tin người dùng: tài khoản, tham gia server, vai trò, trạng thái, nền tảng, hoạt động, biệt danh, boost, timeout.", cmds: ["/userinfo • !userinfo"], perm: "Send Messages" },
    en: { title: "/userinfo • !userinfo", body: "View user information: account, server join, roles, status, platform, activity, nickname, boost, timeout.", cmds: ["/userinfo • !userinfo"], perm: "Send Messages" } }
};

/* ============================================================
   LEGAL
   ============================================================ */
const LEGAL = {
  privacy: {
    vi: `
      <h2>1. Giới thiệu</h2>
      <p>Chính sách bảo mật này giải thích cách <strong>Nova</strong> xử lý dữ liệu khi bạn sử dụng bot trong server Discord của bạn. Chủ sở hữu bot là <strong>nova_.inovation</strong>. Ngày hiệu lực: <strong>19/09/2026</strong>.</p>

      <h2>2. Dữ liệu Nova có thể xử lý</h2>
      <ul>
        <li><strong>ID người dùng Discord và ID server</strong> — để phân biệt người dùng, lưu cấu hình theo server và áp dụng đúng quyền.</li>
        <li><strong>Nội dung tin nhắn</strong> — chỉ xử lý khi cần cho tính năng AI/chat.</li>
        <li><strong>Lịch sử hội thoại AI</strong> — dùng để duy trì ngữ cảnh. Mỗi người dùng có lịch sử riêng; có thể bật shared history cho kênh.</li>
        <li><strong>Dữ liệu kiểm duyệt, sự kiện, War/Backup</strong> — người tham gia sự kiện, phiên War/Backup đang hoạt động, danh sách tin cậy.</li>
        <li><strong>Dữ liệu cấu hình</strong> — kênh help, vai trò War/Backup, kênh Ban Zone, whitelist Ban Zone.</li>
        <li><strong>Cấu hình prefix theo server</strong> — mỗi server có prefix riêng, được lưu độc lập.</li>
      </ul>

      <h2>3. Xử lý bởi nhà cung cấp AI</h2>
      <p>Nội dung bạn gửi vào các lệnh AI có thể được chuyển tới nhà cung cấp mô hình AI. Mô hình công khai hiển thị trên trang này là <strong>Qwen3.7-max</strong>. Với tạo ảnh, <strong>Cocolink</strong> là nhà cung cấp chính và <strong>Gemini</strong> là dự phòng.</p>
      <p>Chúng tôi không kiểm soát chính sách riêng của nhà cung cấp bên thứ ba. Tránh gửi thông tin nhạy cảm (mật khẩu, thanh toán, giấy tờ tuỳ thân) vào lệnh AI.</p>

      <h2>4. Nguyên tắc lưu trữ</h2>
      <ul>
        <li>Dữ liệu lưu ở mức tối thiểu cần thiết cho tính năng tương ứng.</li>
        <li>Lịch sử AI có thể xoá bằng <code>!clearchat</code> / <code>/clearchat</code>.</li>
        <li>Cấu hình server (bao gồm prefix) tồn tại khi bot còn trong server.</li>
        <li>Khi bot bị mời ra, cấu hình gắn với server đó có thể được xoá hoặc giữ lại trong thời gian hợp lý.</li>
      </ul>

      <h2>5. Nguyên tắc bảo mật</h2>
      <p>Chúng tôi giới hạn quyền truy cập, không hiển thị thông tin bí mật ra ngoài, và không lưu trữ token, API key hay mật khẩu trên trang web tĩnh này. Không có hệ thống nào an toàn tuyệt đối.</p>

      <h2>6. Quyền của bạn</h2>
      <ul>
        <li>Yêu cầu xem, sửa hoặc xoá dữ liệu liên quan tới mình.</li>
        <li>Xoá lịch sử hội thoại AI bằng <code>!clearchat</code>.</li>
        <li>Chủ server có thể xoá cấu hình (bao gồm prefix) bằng lệnh tương ứng.</li>
        <li>Liên hệ qua email hoặc Support Server để được hỗ trợ.</li>
      </ul>

      <h2>7. Liên hệ</h2>
      <p>Email: <a href="mailto:anhbao27072011@gmail.com">anhbao27072011@gmail.com</a><br>
      Support Server: <a href="https://discord.gg/qkyu3G6WMa" target="_blank" rel="noopener">discord.gg/qkyu3G6WMa</a><br>
      Chủ sở hữu: <strong>nova_.inovation</strong></p>
    `,
    en: `
      <h2>1. Introduction</h2>
      <p>This Privacy Policy explains how <strong>Nova</strong> processes data when you use the bot in your Discord server. Owned by <strong>nova_.inovation</strong>. Effective date: <strong>19/09/2026</strong>.</p>

      <h2>2. Data Nova may process</h2>
      <ul>
        <li><strong>Discord user IDs and server IDs</strong> — to distinguish users, store per-server config and apply permissions.</li>
        <li><strong>Message content</strong> — only where required for AI/chat features.</li>
        <li><strong>AI conversation history</strong> — to maintain conversation context. Each user has their own; shared history can be enabled per channel.</li>
        <li><strong>Moderation, event, War/Backup data</strong> — event participants, active War/Backup sessions, trusted user lists.</li>
        <li><strong>Configuration data</strong> — help channel, War/Backup roles, Ban Zone channel, Ban Zone whitelist.</li>
        <li><strong>Server-specific prefix configuration</strong> — each server stores its own prefix independently.</li>
      </ul>

      <h2>3. AI provider processing</h2>
      <p>Content you submit to AI commands may be sent to an AI model provider. The public model shown on this site is <strong>Qwen3.7-max</strong>. For images, <strong>Cocolink</strong> is primary and <strong>Gemini</strong> is fallback.</p>
      <p>We do not control third-party policies. Avoid sending sensitive information (passwords, payment details, ID documents) into AI commands.</p>

      <h2>4. Data retention</h2>
      <ul>
        <li>Data is stored only at the minimum required for the corresponding feature.</li>
        <li>AI conversation history can be cleared with <code>!clearchat</code> / <code>/clearchat</code>.</li>
        <li>Server config (including prefix) exists while the bot is in the server.</li>
        <li>When the bot is removed, config tied to that server may be deleted or kept for a reasonable period.</li>
      </ul>

      <h2>5. Security principles</h2>
      <p>We limit access, never expose secrets externally, and never store tokens, API keys or passwords on this static site. No system is perfectly secure.</p>

      <h2>6. Your rights</h2>
      <ul>
        <li>Request to view, correct or delete data related to you.</li>
        <li>Clear your AI conversation history with <code>!clearchat</code>.</li>
        <li>Server owners can clear configuration (including prefix) via the relevant commands.</li>
        <li>Contact us by email or through the Support Server.</li>
      </ul>

      <h2>7. Contact</h2>
      <p>Email: <a href="mailto:anhbao27072011@gmail.com">anhbao27072011@gmail.com</a><br>
      Support Server: <a href="https://discord.gg/qkyu3G6WMa" target="_blank" rel="noopener">discord.gg/qkyu3G6WMa</a><br>
      Owner: <strong>nova_.inovation</strong></p>
    `
  },
  terms: {
    vi: `
      <h2>1. Mô tả dịch vụ</h2>
      <p><strong>Nova</strong> là bot Discord cung cấp: AI chat, tạo ảnh AI, điều phối War/Backup, tạo sự kiện, bảo vệ Ban Zone, kiểm duyệt, thông tin server và công cụ riêng theo từng server (bao gồm prefix riêng). Chủ sở hữu: <strong>nova_.inovation</strong>. Ngày hiệu lực: <strong>19/09/2026</strong>.</p>

      <h2>2. Sử dụng hợp lệ</h2>
      <ul>
        <li>Tuân thủ Điều khoản dịch vụ và Nguyên tắc cộng đồng của Discord.</li>
        <li>Có đủ quyền hạn trong server khi dùng lệnh kiểm duyệt, cấu hình hoặc Ban Zone.</li>
        <li>Chịu trách nhiệm về nội dung gửi vào các lệnh AI.</li>
        <li>Không dùng bot để quấy rối, doxxing, spam hoặc phát tán nội dung vi phạm pháp luật.</li>
      </ul>

      <h2>3. Hành vi bị cấm</h2>
      <ul>
        <li>Khai thác, phá hoại hoặc gây quá tải hệ thống bot.</li>
        <li>Truy cập trái phép vào API key, token hoặc cấu hình nội bộ.</li>
        <li>Thực hiện hành vi vi phạm pháp luật hoặc xâm phạm quyền của người khác.</li>
        <li>Dùng Ban Zone để trục lợi hoặc trả đũa không chính đáng.</li>
      </ul>

      <h2>4. Trách nhiệm kiểm duyệt</h2>
      <p>Bạn và ban quản trị server chịu trách nhiệm về cách sử dụng lệnh kiểm duyệt và Ban Zone. Nova chỉ thực thi theo cấu hình và quyền bạn thiết lập. Thứ bậc vai trò quyết định khả năng hành động, và chủ server không thể bị bot ban.</p>

      <h2>5. Trách nhiệm về prefix riêng</h2>
      <p>Việc đổi prefix server là trách nhiệm của người dùng có quyền quản lý server. Nova không chịu trách nhiệm cho sự cố do đặt prefix gây nhầm lẫn hoặc xung đột với bot khác.</p>

      <h2>6. Tuyên bố miễn trừ về nội dung do AI tạo</h2>
      <p>Nội dung do AI tạo (văn bản và hình ảnh) có thể không chính xác, không đầy đủ hoặc không phù hợp với mục đích cụ thể. Bạn tự chịu trách nhiệm khi sử dụng nội dung đó.</p>

      <h2>7. Sử dụng War/Backup/Event</h2>
      <p>Bạn chịu trách nhiệm về thông tin mình cung cấp và cách sử dụng các nút hành động. Nova không chịu trách nhiệm cho thoả thuận hoặc kết quả giữa các thành viên bên ngoài bot.</p>

      <h2>8. Trách nhiệm về Ban Zone</h2>
      <p>Bạn chịu trách nhiệm cấu hình đúng chế độ, whitelist và vai trò. Việc whitelist chỉ chủ server quản lý được nhằm hạn chế lạm dụng.</p>

      <h2>9. Tính khả dụng</h2>
      <p>Dịch vụ cung cấp "nguyên trạng". Nova có thể tạm ngừng, thay đổi hoặc ngừng hoạt động bất kỳ lúc nào mà không cần báo trước.</p>

      <h2>10. Thay đổi dịch vụ</h2>
      <p>Chúng tôi có thể cập nhật tính năng, lệnh hoặc điều khoản. Phiên bản mới có hiệu lực từ ngày ghi trên trang. Tiếp tục sử dụng bot đồng nghĩa với việc chấp nhận thay đổi.</p>

      <h2>11. Tạm ngừng hoặc chấm dứt</h2>
      <p>Chúng tôi có thể tạm ngừng hoặc chấm dứt quyền truy cập nếu bạn vi phạm. Chủ server có thể gỡ bot bất kỳ lúc nào.</p>

      <h2>12. Liên hệ</h2>
      <p>Chủ sở hữu: <strong>nova_.inovation</strong><br>
      Email: <a href="mailto:anhbao27072011@gmail.com">anhbao27072011@gmail.com</a><br>
      Support Server: <a href="https://discord.gg/qkyu3G6WMa" target="_blank" rel="noopener">discord.gg/qkyu3G6WMa</a></p>
    `,
    en: `
      <h2>1. Service description</h2>
      <p><strong>Nova</strong> is a Discord bot providing: AI chat, AI image generation, War/Backup coordination, event creation, Ban Zone protection, moderation, server information and server-specific tools (including custom prefixes). Owned by <strong>nova_.inovation</strong>. Effective date: <strong>19/09/2026</strong>.</p>

      <h2>2. Acceptable use</h2>
      <ul>
        <li>Comply with Discord's Terms of Service and Community Guidelines.</li>
        <li>Hold sufficient permissions when using moderation, configuration or Ban Zone commands.</li>
        <li>You are responsible for content submitted to AI commands.</li>
        <li>Do not use the bot for harassment, doxxing, spam or illegal content.</li>
      </ul>

      <h2>3. Prohibited abuse</h2>
      <ul>
        <li>Exploiting, disrupting or overloading the bot's systems.</li>
        <li>Unauthorised access to API keys, tokens or internal configuration.</li>
        <li>Committing illegal acts or infringing on the rights of others.</li>
        <li>Using Ban Zone for unjustified retaliation or gain.</li>
      </ul>

      <h2>4. Moderation responsibilities</h2>
      <p>You and your server's staff are responsible for how moderation and Ban Zone commands are used. Nova only executes according to the config and permissions you set. Role hierarchy determines action capability, and the server owner can never be banned by the bot.</p>

      <h2>5. Custom prefix responsibility</h2>
      <p>Changing the server prefix is the responsibility of users with server management permissions. Nova is not responsible for issues caused by confusing prefixes or conflicts with other bots.</p>

      <h2>6. AI-generated content disclaimer</h2>
      <p>AI-generated content (text and images) may be inaccurate, incomplete or unsuitable for your purpose. You use such content at your own responsibility.</p>

      <h2>7. War/Backup/Event usage</h2>
      <p>You are responsible for the information you provide and for using action buttons appropriately. Nova is not responsible for agreements or outcomes between members outside the bot.</p>

      <h2>8. Ban Zone responsibility</h2>
      <p>You are responsible for configuring the correct mode, whitelist and roles. The whitelist being server-owner-managed exists to limit abuse.</p>

      <h2>9. Availability</h2>
      <p>The service is provided "as is". Nova may be paused, changed or discontinued at any time without prior notice.</p>

      <h2>10. Changes to the service</h2>
      <p>We may update features, commands or these terms. The new version applies from the date shown on this page. Continuing to use the bot means you accept those changes.</p>

      <h2>11. Termination or suspension</h2>
      <p>We may suspend or terminate your access if you violate these terms. Server owners may remove the bot at any time.</p>

      <h2>12. Contact</h2>
      <p>Owner: <strong>nova_.inovation</strong><br>
      Email: <a href="mailto:anhbao27072011@gmail.com">anhbao27072011@gmail.com</a><br>
      Support Server: <a href="https://discord.gg/qkyu3G6WMa" target="_blank" rel="noopener">discord.gg/qkyu3G6WMa</a></p>
    `
  }
};

/* ============================================================
   STATE
   ============================================================ */
let lang = 'vi';
let activeCategory = 'all';
let lastFocused = null;
let lastHelpFeature = null;
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const t  = (k) => (I18N[lang] && I18N[lang][k]) || (I18N.vi[k] || k);
const esc = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function newLabel() {
  return lang === 'vi' ? '✨ MỚI' : '✨ NEW';
}
function typeLabel(type) {
  const m = { slash: 'commands.type.slash', prefix: 'commands.type.prefix', both: 'commands.type.both', button: 'commands.type.button' };
  return t(m[type] || 'commands.type.both');
}
function typeClass(type) {
  if (type === 'slash') return 'slash';
  if (type === 'prefix') return 'prefix';
  if (type === 'button') return 'button';
  return 'both';
}

/* ============================================================
   LANGUAGE
   ============================================================ */
function setLang(next, save = true) {
  lang = (next === 'en') ? 'en' : 'vi';
  document.documentElement.lang = lang;
  if (save) { try { localStorage.setItem(LS_LANG, lang); } catch (e) {} }

  $$('[data-i18n]').forEach(el => {
    const v = I18N[lang][el.getAttribute('data-i18n')];
    if (typeof v === 'string') el.innerHTML = v;
  });
  $$('[data-i18n-placeholder]').forEach(el => {
    const v = I18N[lang][el.getAttribute('data-i18n-placeholder')];
    if (v) el.setAttribute('placeholder', v);
  });
  $$('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const src = key.startsWith('privacy') ? LEGAL.privacy : LEGAL.terms;
    el.innerHTML = src[lang];
  });
  $$('[data-i18n-aria]').forEach(el => {
    const v = I18N[lang][el.getAttribute('data-i18n-aria')];
    if (v) el.setAttribute('aria-label', v);
  });

  const seg = $('#langSwitch');
  if (seg) {
    seg.setAttribute('data-active', lang);
    $$('.seg-btn', seg).forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === lang ? 'true' : 'false'));
  }

  renderFeatures();
  renderChips();
  renderCommands();
  renderHelpCategories();
  renderHelpSelect();
  renderHelpChips();
  if (lastHelpFeature) renderHelpFeature(lastHelpFeature);
  applySearch();
  const um = $('#updateModal');
  if (um && !um.hidden) renderUpdateLog();

  const page = document.body.dataset.page;
  if (page === 'privacy') document.title = (lang === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy') + ' — Nova';
  else if (page === 'terms') document.title = (lang === 'vi' ? 'Điều khoản dịch vụ' : 'Terms of Service') + ' — Nova';
  else document.title = t('meta.title');
}

/* ============================================================
   UPDATE LOG
   ============================================================ */
function renderUpdateLog() {
  const body = $('#updateBody');
  if (!body) return;
  const update = UPDATE_LOG[0];
  if (!update) { body.innerHTML = ''; return; }

  const itemsHtml = update.items.map(item => {
    const title = item.title[lang];
    const desc = item.description[lang];
    const cmds = item.commands.map(c => `<code>${esc(c)}</code>`).join('');
    const newMark = item.isCurrent ? `<span class="badge-new">${newLabel()}</span>` : '';
    return `
      <div class="update-item">
        <h3>
          <span aria-hidden="true">${item.icon}</span>
          <span>${esc(title)}</span>
          ${newMark}
        </h3>
        <p>${desc.replace(/`([^`]+)`/g, '<code>$1</code>')}</p>
        ${cmds ? `<div class="update-cmds">${cmds}</div>` : ''}
      </div>`;
  }).join('');

  body.innerHTML = `
    <h2 class="update-head" id="updateTitle">✨ ${esc(update.id)}</h2>
    <p class="update-sub">${esc(t('update.sub'))}</p>
    <div class="update-panel">
      <div class="update-panel-header">
        <span class="up-id">${esc(update.id)}</span>
        <span class="up-date">${esc(update.date)}</span>
      </div>
      <div class="update-items">${itemsHtml}</div>
    </div>
    <div class="update-footer">
      <label class="update-snooze" for="snoozeCheck">
        <input type="checkbox" id="snoozeCheck">
        <span>${esc(t('update.snoozeLabel'))}</span>
      </label>
      <button type="button" class="btn-okay" id="updateOkayBtn">${esc(t('update.okay'))}</button>
    </div>
  `;

  const snooze = $('#snoozeCheck');
  if (snooze) {
    snooze.addEventListener('change', () => {
      if (snooze.checked) {
        const until = Date.now() + 24 * 60 * 60 * 1000;
        try { localStorage.setItem(LS_SNOOZE, String(until)); } catch (e) {}
      } else {
        try { localStorage.removeItem(LS_SNOOZE); } catch (e) {}
      }
    });
  }

  const okayBtn = $('#updateOkayBtn');
  if (okayBtn) okayBtn.addEventListener('click', closeUpdateLog);
}

function isSnoozed() {
  try {
    const until = parseInt(localStorage.getItem(LS_SNOOZE) || '0', 10);
    if (!Number.isFinite(until)) return false;
    if (until > Date.now()) return true;
    localStorage.removeItem(LS_SNOOZE);
    return false;
  } catch (e) {
    return false;
  }
}

function openUpdateLog() {
  const m = $('#updateModal');
  if (!m) return;
  renderUpdateLog();
  lastFocused = document.activeElement;
  m.hidden = false;
  document.body.style.overflow = 'hidden';
  const panel = $('.modal-panel', m);
  requestAnimationFrame(() => panel.focus());
  document.addEventListener('keydown', onUpdateKey);
}
function closeUpdateLog() {
  const m = $('#updateModal');
  if (!m || m.hidden) return;
  m.hidden = true;
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onUpdateKey);
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}
function onUpdateKey(e) {
  if (e.key === 'Escape') { e.preventDefault(); closeUpdateLog(); return; }
  if (e.key !== 'Tab') return;
  const panel = $('#updateModal .modal-panel');
  const focusables = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', panel)
    .filter(el => el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ============================================================
   FEATURES
   ============================================================ */
function renderFeatures() {
  const grid = $('#featureGrid');
  if (!grid) return;
  grid.innerHTML = FEATURES.map(f => {
    const loc = f[lang];
    const hasNew = f.commands.some(c => c.isNew);
    return `
      <article class="feature-card reveal" tabindex="0" role="button"
               aria-label="${esc(loc.title)}" data-feature="${f.id}">
        <div class="feature-icon" aria-hidden="true">${f.icon}</div>
        <h3>
          <span>${esc(loc.title)}</span>
          ${hasNew ? `<span class="badge-new">${newLabel()}</span>` : ''}
        </h3>
        <p>${esc(loc.short)}</p>
        <div class="feature-meta">
          <span>${f.commands.length} ${esc(t('features.commands'))}</span>
          <span class="open">${esc(t('features.view'))}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </span>
        </div>
      </article>`;
  }).join('');

  $$('.feature-card', grid).forEach(card => {
    card.addEventListener('click', () => openFeature(card.dataset.feature));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openFeature(card.dataset.feature); }
    });
    card.addEventListener('pointermove', e => {
      if (REDUCED) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  observeReveal();
}

function openFeature(id) {
  const f = FEATURES.find(x => x.id === id);
  if (!f) return;
  const loc = f[lang];
  const body = $('#modalBody');
  const hasNew = f.commands.some(c => c.isNew);

  const cmdsHtml = f.commands.map(c => `
    <div class="modal-cmd">
      <div class="mc-top">
        <span class="cmd-name">${esc(c.name)}</span>
        <span class="tag ${typeClass(c.type)}">${esc(typeLabel(c.type))}</span>
        ${c.isNew ? `<span class="badge-new">${newLabel()}</span>` : ''}
      </div>
      <p class="mc-desc">${esc(c[lang].d)}</p>
      ${c[lang].p ? `<p class="mc-perm"><b>${esc(t('commands.permission'))}:</b> ${esc(c[lang].p)}</p>` : ''}
      ${c.ex ? `<code class="modal-example">${esc(c.ex)}</code>` : ''}
    </div>`).join('');

  const detailsHtml = loc.details.map(d => `<li>${d}</li>`).join('');
  const permsHtml = loc.perms.map(p => `<li>${p}</li>`).join('');
  const examplesHtml = loc.examples.map(e => `<code class="modal-example">${esc(e)}</code>`).join('');

  body.innerHTML = `
    <div class="modal-head">
      <div class="m-icon" aria-hidden="true">${f.icon}</div>
      <h2 id="modalTitle">
        <span>${esc(loc.title)}</span>
        ${hasNew ? `<span class="badge-new">${newLabel()}</span>` : ''}
      </h2>
    </div>
    <p class="modal-lead">${esc(loc.lead)}</p>

    <div class="modal-section">
      <h3>${esc(t('modal.featuresTitle'))}</h3>
      <ul class="modal-list">${detailsHtml}</ul>
    </div>
    <div class="modal-section">
      <h3>${esc(t('modal.commandsTitle'))}</h3>
      <div class="modal-cmds">${cmdsHtml}</div>
    </div>
    <div class="modal-section">
      <h3>${esc(t('modal.permsTitle'))}</h3>
      <ul class="modal-list">${permsHtml}</ul>
    </div>
    <div class="modal-section">
      <h3>${esc(t('modal.examplesTitle'))}</h3>
      ${examplesHtml}
    </div>
    <div class="modal-actions">
      <a class="btn btn-primary" href="${CONFIG.BOT_INVITE_URL}" target="_blank" rel="noopener">${esc(t('modal.invite'))}</a>
      <a class="btn btn-glass" href="${CONFIG.SUPPORT_SERVER_URL}" target="_blank" rel="noopener">${esc(t('modal.support'))}</a>
    </div>`;

  showModal();
}

/* ============================================================
   MODAL (feature)
   ============================================================ */
function showModal() {
  const modal = $('#modal');
  lastFocused = document.activeElement;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  const panel = $('.modal-panel', modal);
  requestAnimationFrame(() => panel.focus());
  document.addEventListener('keydown', onModalKey);
}
function closeModal() {
  const modal = $('#modal');
  if (modal.hidden) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  document.removeEventListener('keydown', onModalKey);
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}
function onModalKey(e) {
  if (e.key === 'Escape') { e.preventDefault(); closeModal(); return; }
  if (e.key !== 'Tab') return;
  const panel = $('#modal .modal-panel');
  const focusables = $$('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])', panel)
    .filter(el => el.offsetParent !== null);
  if (!focusables.length) return;
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
}

/* ============================================================
   COMMAND DIRECTORY
   ============================================================ */
function allCommands() {
  const out = [];
  FEATURES.forEach(f => f.commands.forEach(c => out.push({ ...c, featureId: f.id, icon: f.icon })));
  return out;
}

function renderChips() {
  const wrap = $('#categoryChips');
  if (!wrap) return;
  const cats = [{ id: 'all', icon: '✨', title: t('commands.all') }]
    .concat(FEATURES.map(f => ({ id: f.id, icon: f.icon, title: f[lang].title })));

  wrap.innerHTML = cats.map(c => `
    <button type="button" class="chip${activeCategory === c.id ? ' active' : ''}"
            role="tab" aria-selected="${activeCategory === c.id}"
            data-cat="${c.id}">${c.icon} ${esc(c.title)}</button>`).join('');

  $$('.chip', wrap).forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.cat;
      renderChips();
      renderCommands();
      applySearch();
    });
  });
}

function renderCommands() {
  const wrap = $('#commandGroups');
  if (!wrap) return;
  const groups = activeCategory === 'all' ? FEATURES : FEATURES.filter(f => f.id === activeCategory);

  wrap.innerHTML = groups.map(f => {
    const loc = f[lang];
    return `
      <div class="cmd-group" data-group="${f.id}">
        <div class="cmd-group-head">
          <span class="g-icon" aria-hidden="true">${f.icon}</span>
          <h3><span>${esc(loc.title)}</span></h3>
          <span class="count">${f.commands.length} ${esc(t('features.commands'))}</span>
        </div>
        <div class="cmd-list">
          ${f.commands.map(c => cmdCard(c)).join('')}
        </div>
      </div>`;
  }).join('');

  observeReveal();
}

function cmdCard(c) {
  return `
    <article class="cmd-card reveal">
      <div class="cmd-top">
        <span class="cmd-name">${esc(c.name)}</span>
        <span class="tag ${typeClass(c.type)}">${esc(typeLabel(c.type))}</span>
        ${c.isNew ? `<span class="badge-new">${newLabel()}</span>` : ''}
      </div>
      <p class="cmd-desc">${esc(c[lang].d)}</p>
      <div class="cmd-foot">
        ${c[lang].p ? `<span><b>${esc(t('commands.permission'))}:</b> ${esc(c[lang].p)}</span>` : ''}
      </div>
      ${c.ex ? `<code class="cmd-example">${esc(c.ex)}</code>` : ''}
    </article>`;
}

/* ============================================================
   SEARCH
   ============================================================ */
function applySearch() {
  const input = $('#searchInput');
  const clear = $('#searchClear');
  const results = $('#searchResults');
  const groups = $('#commandGroups');
  if (!input || !results || !groups) return;

  const q = input.value.trim().toLowerCase();
  clear.hidden = !q;

  if (!q) {
    results.hidden = true;
    results.innerHTML = '';
    groups.hidden = false;
    return;
  }

  groups.hidden = true;
  results.hidden = false;

  const cmdHits = allCommands().filter(c => {
    const hay = [c.name, c[lang].d, c[lang].p, c.ex, c.featureId].join(' ').toLowerCase();
    return hay.includes(q);
  });

  const featHits = FEATURES.filter(f => {
    const hay = [f[lang].title, f[lang].short, f[lang].lead,
                 (f[lang].details || []).join(' '), (f[lang].perms || []).join(' '),
                 f.id].join(' ').toLowerCase();
    return hay.includes(q);
  });

  const helpHits = HELP_CATEGORIES.filter(h => {
    const hay = [h[lang].name, h[lang].desc, h.viBody.title, h.enBody.title].join(' ').toLowerCase();
    return hay.includes(q);
  });

  if (!cmdHits.length && !featHits.length && !helpHits.length) {
    results.innerHTML = `<div class="sr-empty">${esc(t('commands.noResults'))}</div>`;
    return;
  }

  let html = '';

  if (featHits.length) {
    html += `<div class="cmd-group">
      <div class="cmd-group-head">
        <span class="g-icon">🧩</span>
        <h3>${esc(t('nav.features'))}</h3>
        <span class="count">${featHits.length} ${esc(t('commands.results'))}</span>
      </div>
      <div class="cmd-list">
        ${featHits.map(f => `
          <article class="cmd-card" data-jump="${f.id}" tabindex="0" role="button">
            <div class="cmd-top">
              <span class="cmd-name">${f.icon} ${esc(f[lang].title)}</span>
            </div>
            <p class="cmd-desc">${esc(f[lang].short)}</p>
            <div class="cmd-foot"><span><b>${esc(t('features.view'))}</b></span></div>
          </article>`).join('')}
      </div>
    </div>`;
  }

  if (cmdHits.length) {
    html += `<div class="cmd-group">
      <div class="cmd-group-head">
        <span class="g-icon">⌨️</span>
        <h3>${esc(t('nav.commands'))}</h3>
        <span class="count">${cmdHits.length} ${esc(t('commands.results'))}</span>
      </div>
      <div class="cmd-list">${cmdHits.map(cmdCard).join('')}</div>
    </div>`;
  }

  if (helpHits.length) {
    html += `<div class="cmd-group">
      <div class="cmd-group-head">
        <span class="g-icon">📖</span>
        <h3>${esc(t('nav.help'))}</h3>
        <span class="count">${helpHits.length} ${esc(t('commands.results'))}</span>
      </div>
      <div class="cmd-list">
        ${helpHits.map(h => `
          <article class="cmd-card" data-help="${h.id}" tabindex="0" role="button">
            <div class="cmd-top">
              <span class="cmd-name">${h.icon} ${esc(h[lang].name)}</span>
            </div>
            <p class="cmd-desc">${esc(h[lang].desc)}</p>
          </article>`).join('')}
      </div>
    </div>`;
  }

  results.innerHTML = html;

  $$('[data-jump]', results).forEach(el => {
    const go = () => { closeModal(); location.hash = '#features'; openFeature(el.dataset.jump); };
    el.addEventListener('click', go);
    el.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
  $$('[data-help]', results).forEach(el => {
    el.addEventListener('click', () => {
      closeModal();
      const sel = $('#helpSelect');
      if (sel) { sel.value = el.dataset.help; sel.dispatchEvent(new Event('change')); }
      location.hash = '#help';
    });
  });
}

/* ============================================================
   HELP
   ============================================================ */
function renderHelpCategories() {
  const list = $('#helpCategoryList');
  if (!list) return;
  list.innerHTML = HELP_CATEGORIES.map(h => `
    <li>
      <span class="ico" aria-hidden="true">${h.icon}</span>
      <span>
        <b><span>${esc(h[lang].name)}</span></b>
        <span>${esc(h[lang].desc)}</span>
      </span>
    </li>`).join('');
}

function renderHelpSelect() {
  const sel = $('#helpSelect');
  if (!sel) return;
  const current = sel.value;
  sel.innerHTML = `<option value="">${esc(t('help.selectPlaceholder'))}</option>` +
    HELP_CATEGORIES.map(h => `<option value="${h.id}">${h.icon} ${esc(h[lang].name)}</option>`).join('');
  if (current) sel.value = current;
}

function renderHelpChips() {
  const wrap = $('#helpChips');
  if (!wrap) return;
  const keys = ['chat', 'info', 'prefix', 'ban', 'unban', 'mute', 'unmute', 'bandebug', 'trust', 'warping', 'image', 'event', 'banzone', 'persona', 'config', 'help', 'serverinfo', 'userinfo'];
  wrap.innerHTML = keys.map(k => `<button type="button" class="chip" data-hf="${k}">!help ${esc(k)}</button>`).join('');
  $$('[data-hf]', wrap).forEach(b => {
    b.addEventListener('click', () => {
      const inp = $('#helpFeatureInput');
      if (inp) inp.value = b.dataset.hf;
      renderHelpFeature(b.dataset.hf);
    });
  });
}

function renderHelpCategory(id) {
  const out = $('#helpOutput');
  const h = HELP_CATEGORIES.find(x => x.id === id);
  if (!out) return;
  if (!h) { out.innerHTML = ''; return; }
  const body = lang === 'vi' ? h.viBody : h.enBody;
  out.innerHTML = `
    <div class="help-out-card">
      <h4><span>${h.icon} ${esc(body.title)}</span></h4>
      <div class="hc-cmds">
        ${body.cmds.map(c => `<span class="cmd-name">${esc(c)}</span>`).join('')}
      </div>
      <p>${esc(body.text)}</p>
      <p><strong>${lang === 'vi' ? 'Lưu ý' : 'Note'}:</strong> ${body.note.replace(/`([^`]+)`/g, '<code>$1</code>')}</p>
    </div>`;
}

function renderHelpFeature(key) {
  const out = $('#helpFeatureOutput');
  if (!out) return;
  const k = String(key || '').trim().toLowerCase().replace(/^!?help\s*/, '');
  lastHelpFeature = k;
  const f = HELP_FEATURES[k];

  if (!f) {
    out.innerHTML = `<div class="help-out-card"><p>${esc(t('help.notFound'))}</p></div>`;
    return;
  }
  const loc = f[lang];
  out.innerHTML = `
    <div class="help-out-card">
      <h4>
        <span>${f.icon} ${esc(loc.title)}</span>
        ${f.isNew ? `<span class="badge-new">${newLabel()}</span>` : ''}
      </h4>
      <div class="hc-cmds">
        ${loc.cmds.map(c => `<span class="cmd-name">${esc(c)}</span>`).join('')}
      </div>
      <p>${loc.body.replace(/`([^`]+)`/g, '<code>$1</code>')}</p>
      <p><strong>${esc(t('commands.permission'))}:</strong> ${esc(loc.perm)}</p>
    </div>`;
}

/* ============================================================
   MOBILE MENU
   ============================================================ */
function initMobileMenu() {
  const btn = $('#hamburger');
  const menu = $('#mobileMenu');
  if (!btn || !menu) return;
  const close = () => { menu.hidden = true; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-label', 'Open menu'); };
  const open  = () => { menu.hidden = false; btn.setAttribute('aria-expanded', 'true');  btn.setAttribute('aria-label', 'Close menu'); };
  btn.addEventListener('click', () => { if (menu.hidden) open(); else close(); });
  $$('a', menu).forEach(a => a.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) close(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 1080 && !menu.hidden) close(); });
}

/* ============================================================
   REVEAL
   ============================================================ */
let revealObserver = null;
function observeReveal() {
  if (REDUCED || !('IntersectionObserver' in window)) {
    $$('.reveal').forEach(el => el.classList.add('in'));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in');
          revealObserver.unobserve(en.target);
        }
      });
    }, { rootMargin: '0px 0px -60px 0px', threshold: 0.08 });
  }
  $$('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
}

/* ============================================================
   IMAGE FALLBACK
   ============================================================ */
function initImageFallback() {
  $$('img[data-avatar]').forEach(img => {
    img.addEventListener('error', () => {
      if (img.dataset.fallbackApplied) return;
      img.dataset.fallbackApplied = '1';
      img.src = FALLBACK_AVATAR;
    }, { once: true });
    if (img.complete && img.naturalWidth === 0) {
      img.dataset.fallbackApplied = '1';
      img.src = FALLBACK_AVATAR;
    }
  });
}

/* ============================================================
   NAV SCROLL SPY
   ============================================================ */
function initScrollSpy() {
  const sections = ['home', 'features', 'commands', 'help']
    .map(id => document.getElementById(id))
    .filter(Boolean);
  if (!sections.length) return;

  const navLinks = $$('.nav-links a');
  if (!navLinks.length) return;

  const getActiveId = () => {
    const navOffset = 140;
    const scrollY = window.scrollY || window.pageYOffset;
    let current = sections[0].id;

    for (const sec of sections) {
      const top = sec.offsetTop - navOffset;
      if (scrollY >= top) {
        current = sec.id;
      } else {
        break;
      }
    }

    const scrollBottom = scrollY + window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;
    if (docHeight - scrollBottom < 80) {
      current = sections[sections.length - 1].id;
    }

    return current;
  };

  let ticking = false;
  const update = () => {
    const activeId = getActiveId();
    navLinks.forEach(a => {
      const href = a.getAttribute('href') || '';
      const isActive = href.endsWith('#' + activeId) || href === '#' + activeId;
      a.classList.toggle('active', isActive);
    });
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

  navLinks.forEach(a => {
    a.addEventListener('click', () => {
      const href = a.getAttribute('href') || '';
      const match = href.match(/#(.+)$/);
      if (!match) return;
      const id = match[1];
      if (!sections.some(s => s.id === id)) return;
      navLinks.forEach(x => x.classList.remove('active'));
      a.classList.add('active');
    });
  });

  update();
}

/* ============================================================
   INIT
   ============================================================ */
function init() {
  let saved = null;
  try { saved = localStorage.getItem(LS_LANG); } catch (e) {}
  lang = (saved === 'en' || saved === 'vi') ? saved : 'vi';

  initImageFallback();
  initMobileMenu();

  const y = $('#year');
  if (y) y.textContent = new Date().getFullYear();

  const seg = $('#langSwitch');
  if (seg) {
    $$('.seg-btn', seg).forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
  }

  $$('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  $$('[data-close-update]').forEach(el => el.addEventListener('click', closeUpdateLog));

  const input = $('#searchInput');
  if (input) {
    input.addEventListener('input', applySearch);
    input.addEventListener('keydown', e => { if (e.key === 'Escape') { input.value = ''; applySearch(); } });
  }
  const clear = $('#searchClear');
  if (clear) clear.addEventListener('click', () => { if (input) input.value = ''; applySearch(); input && input.focus(); });

  const sel = $('#helpSelect');
  if (sel) sel.addEventListener('change', () => renderHelpCategory(sel.value));

  const form = $('#helpForm');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); renderHelpFeature($('#helpFeatureInput').value); });

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: REDUCED ? 'auto' : 'smooth', block: 'start' });
      history.replaceState(null, '', id);
    });
  });

  setLang(lang, false);

  if (document.body.dataset.page === 'index') {
    initScrollSpy();
  }

  if (sel && document.body.dataset.page === 'index') {
    sel.value = 'ai';
    renderHelpCategory('ai');
  }
  if ($('#helpFeatureOutput') && document.body.dataset.page === 'index') {
    renderHelpFeature('info');
  }

  // AUTO-OPEN Update Log
  if (!isSnoozed()) {
    setTimeout(() => openUpdateLog(), 600);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
