/* ============================================
   Nova — Core JavaScript
   iOS 27 Liquid Glass Interactions
   ============================================ */

/* ---------- Configuration ---------- */
const CONFIG = {
    BOT_NAME: "Nova",
    BOT_OWNER: "nova_.inovation",
    BOT_AVATAR: "assets/avatar.png",
    BOT_INVITE_URL: "https://discord.com/oauth2/authorize?client_id=1532745879944036523",
    CONTACT_EMAIL: "anhbao27072011@gmail.com",
    SUPPORT_SERVER_URL: "https://discord.gg/qkyu3G6WMa",
    AI_PROVIDER: "Qwen3.7-max",
    EFFECTIVE_DATE: "19/09/2026",
    EFFECTIVE_DATE_EN: "September 19, 2026"
};

/* ---------- Translations ---------- */
const TRANSLATIONS = {
    vi: {
        /* Navbar */
        "nav.home": "Trang chủ",
        "nav.features": "Tính năng",
        "nav.privacy": "Chính sách bảo mật",
        "nav.terms": "Điều khoản dịch vụ",
        "nav.invite": "Mời Nova",

        /* Hero */
        "hero.tagline": "Trợ lý thông minh cho Discord.",
        "hero.description": "Chat với AI, quản lý cộng đồng, tạo War, Backup, Event và nhiều hơn nữa — ngay trong Discord.",
        "hero.invite": "Mời Nova",
        "hero.explore": "Khám phá tính năng",

        /* Features */
        "features.eyebrow": "Tính năng",
        "features.title": "Tính năng mạnh mẽ.",
        "features.subtitle": "Mọi công cụ bạn cần để xây dựng và quản lý cộng đồng Discord của mình.",

        "feature.ai.title": "AI Chatbot",
        "feature.ai.desc": "Trò chuyện với AI ngay trong Discord. Hỗ trợ AI Chat, Persona, lịch sử chia sẻ và cấu hình AI.",
        "feature.ai.powered": "Được hỗ trợ bởi " + CONFIG.AI_PROVIDER + ".",

        "feature.aiimage.title": "AI Image",
        "feature.aiimage.desc": "Tạo hình ảnh bằng AI ngay trong Discord bằng các lệnh đơn giản.",

        "feature.war.title": "War Ping / Backup Ping",
        "feature.war.desc": "Gọi người tham gia War hoặc yêu cầu Backup nhanh chóng với hệ thống thread, quyền kết thúc và /end all.",

        "feature.event.title": "Event",
        "feature.event.desc": "Tạo và quản lý event cho cộng đồng của bạn một cách dễ dàng.",

        "feature.banzone.title": "Ban Zone",
        "feature.banzone.desc": "Hệ thống Ban Zone và moderation với chế độ Ban/Mute, whitelist và tự động khôi phục kênh.",

        "feature.moderation.title": "Moderation",
        "feature.moderation.desc": "Các công cụ moderation dành cho server với các lệnh cơ bản.",

        "feature.info.title": "Server Information",
        "feature.info.desc": "Xem thông tin chi tiết về bot, server và người dùng.",

        "feature.admin.title": "Admin",
        "feature.admin.desc": "Cấu hình nâng cao cho Server Owner, Manager và Bot Owner.",

        /* Commands */
        "commands.eyebrow": "Lệnh",
        "commands.title": "Lệnh chính",
        "commands.subtitle": "Các lệnh thường dùng của Nova.",

        "cmd.chat": "Trò chuyện với AI",
        "cmd.image": "Tạo hình ảnh bằng AI",
        "cmd.ban": "Cấm người dùng",
        "cmd.unban": "Bỏ cấm người dùng",
        "cmd.mute": "Tắt tiếng người dùng",
        "cmd.unmute": "Bỏ tắt tiếng",
        "cmd.banzone": "Quản lý Ban Zone",
        "cmd.banwhitelist": "Quản lý whitelist Ban Zone",
        "cmd.info": "Thông tin bot",
        "cmd.serverinfo": "Thông tin server",
        "cmd.userinfo": "Thông tin người dùng",
        "cmd.endall": "Kết thúc tất cả War/Backup",

        /* Help Menu */
        "help.title": "Giao diện Help Menu",
        "help.subtitle": "Trải nghiệm Help Menu tinh tế, hiện đại.",
        "help.header": "Nova Help Menu",
        "help.section.title": "Help Menu",
        "help.desc": "Đây là Help Menu của Nova. Sử dụng danh sách bên dưới để xem danh mục bạn muốn.",
        "help.categories": "Danh mục",
        "help.cat.ai": "AI Chatbot",
        "help.cat.war": "War Ping / Backup Ping",
        "help.cat.event": "Event",
        "help.cat.ban": "Ban Zone",
        "help.cat.admin": "Admin",
        "help.tip": "Mẹo: Chọn một danh mục bên dưới để xem chi tiết.",
        "help.placeholder": "Chọn một danh mục",

        /* CTA */
        "cta.title": "Cần hỗ trợ?",
        "cta.subtitle": "Tham gia server hỗ trợ của Nova.",
        "cta.button": "Tham gia Support Server",

        /* Contact */
        "contact.eyebrow": "Liên hệ",
        "contact.title": "Kết nối với chúng tôi",
        "contact.subtitle": "Có câu hỏi? Chúng tôi luôn lắng nghe.",
        "contact.email.label": "Email",
        "contact.owner.label": "Bot Owner",

        /* Footer */
        "footer.tagline": "Trợ lý thông minh cho Discord.",
        "footer.owner": "Bot Owner: " + CONFIG.BOT_OWNER,
        "footer.col.links": "Liên kết",
        "footer.col.resources": "Tài nguyên",
        "footer.link.home": "Trang chủ",
        "footer.link.features": "Tính năng",
        "footer.link.privacy": "Chính sách bảo mật",
        "footer.link.terms": "Điều khoản dịch vụ",
        "footer.link.support": "Support Server",
        "footer.link.contact": "Liên hệ",
        "footer.invite": "Mời Nova",
        "footer.copyright": "© 2026 " + CONFIG.BOT_NAME,
        "footer.effective": "Effective Date: " + CONFIG.EFFECTIVE_DATE,

        /* Privacy Policy */
        "privacy.badge": "Chính sách bảo mật",
        "privacy.title": "Chính sách bảo mật",
        "privacy.effective": "Có hiệu lực từ: " + CONFIG.EFFECTIVE_DATE,

        "privacy.s1.title": "Giới thiệu",
        "privacy.s1.text": "Chính sách bảo mật này giải thích cách Nova thu thập, sử dụng và xử lý thông tin khi bạn sử dụng bot Discord của chúng tôi. Bằng cách sử dụng Nova, bạn đồng ý với các thực tiễn được mô tả trong chính sách này.",

        "privacy.s2.title": "Dữ liệu có thể được xử lý",
        "privacy.s2.text": "Nova có thể xử lý các loại dữ liệu sau để hoạt động đúng chức năng:",
        "privacy.s2.items": [
            "ID người dùng Discord và ID server",
            "Nội dung tin nhắn liên quan đến lệnh bot",
            "Thông tin cấu hình server",
            "Dữ liệu liên quan đến tính năng AI, War, Backup, Event, Ban Zone và Moderation"
        ],

        "privacy.s3.title": "Dữ liệu Discord",
        "privacy.s3.text": "Nova tuân thủ Điều khoản Dịch vụ và Chính sách Bảo mật của Discord. Chúng tôi chỉ truy cập dữ liệu cần thiết để cung cấp tính năng của bot và không chia sẻ dữ liệu Discord của bạn với bên thứ ba không cần thiết.",

        "privacy.s4.title": "Dữ liệu AI",
        "privacy.s4.text": "Khi sử dụng tính năng AI, nội dung bạn gửi có thể được chuyển đến nhà cung cấp AI (" + CONFIG.AI_PROVIDER + ") để xử lý. Chúng tôi không lưu trữ nội dung trò chuyện AI lâu dài hơn mức cần thiết cho hoạt động của bot. Thông tin này có thể thay đổi tùy theo cấu hình triển khai của bot.",

        "privacy.s5.title": "Dữ liệu server",
        "privacy.s5.text": "Nova lưu trữ dữ liệu cấu hình riêng cho từng Discord server, bao gồm cài đặt Ban Zone, vai trò War/Backup, kênh trợ giúp và các tùy chọn cấu hình khác. Dữ liệu này được lưu độc lập theo từng server.",

        "privacy.s6.title": "Moderation",
        "privacy.s6.text": "Các tính năng moderation như Ban Zone, /ban, /mute xử lý dữ liệu liên quan đến hành vi người dùng trong server. Dữ liệu này chỉ được sử dụng cho mục đích quản lý server và không được chia sẻ bên ngoài.",

        "privacy.s7.title": "Lưu trữ",
        "privacy.s7.text": "Dữ liệu được lưu trữ một cách an toàn. Thông tin chi tiết về cơ sở hạ tầng lưu trữ có thể thay đổi tùy theo cấu hình triển khai của bot.",

        "privacy.s8.title": "Dịch vụ bên thứ ba",
        "privacy.s8.text": "Nova sử dụng dịch vụ bên thứ ba bao gồm Discord API và nhà cung cấp AI (" + CONFIG.AI_PROVIDER + "). Việc sử dụng các dịch vụ này tuân theo chính sách bảo mật của từng nhà cung cấp.",

        "privacy.s9.title": "Bảo mật",
        "privacy.s9.text": "Chúng tôi thực hiện các biện pháp bảo mật hợp lý để bảo vệ dữ liệu. Tuy nhiên, không có phương thức truyền tải hoặc lưu trữ nào hoàn toàn an toàn. Thông tin chi tiết về mã hóa có thể thay đổi tùy theo cấu hình triển khai của bot.",

        "privacy.s10.title": "Thời gian lưu trữ",
        "privacy.s10.text": "Dữ liệu được lưu trữ trong khoảng thời gian cần thiết để cung cấp dịch vụ. Thời gian lưu trữ cụ thể có thể thay đổi tùy theo cấu hình triển khai của bot.",

        "privacy.s11.title": "Thay đổi chính sách",
        "privacy.s11.text": "Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Các thay đổi sẽ được thông báo qua các kênh phù hợp. Việc tiếp tục sử dụng Nova sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận chính sách mới.",

        "privacy.s12.title": "Liên hệ",
        "privacy.s12.text": "Nếu bạn có câu hỏi về Chính sách bảo mật này, vui lòng liên hệ:",

        /* Terms of Service */
        "terms.badge": "Điều khoản dịch vụ",
        "terms.title": "Điều khoản dịch vụ",
        "terms.effective": "Có hiệu lực từ: " + CONFIG.EFFECTIVE_DATE,
        "terms.disclaimer": "Nova là Discord bot bên thứ ba và không phải sản phẩm chính thức của Discord.",

        "terms.s1.title": "Giới thiệu",
        "terms.s1.text": "Điều khoản dịch vụ này quản lý việc bạn sử dụng bot Discord Nova. Bằng cách sử dụng Nova, bạn đồng ý tuân thủ các điều khoản này.",

        "terms.s2.title": "Chấp nhận điều khoản",
        "terms.s2.text": "Bằng cách thêm Nova vào server Discord của bạn hoặc sử dụng bất kỳ lệnh nào của bot, bạn xác nhận rằng đã đọc, hiểu và đồng ý với các điều khoản này. Nếu bạn không đồng ý, vui lòng không sử dụng Nova.",

        "terms.s3.title": "Sử dụng Nova",
        "terms.s3.text": "Bạn đồng ý sử dụng Nova chỉ cho các mục đích hợp pháp và tuân thủ Điều khoản Dịch vụ của Discord. Bạn không được sử dụng Nova để gửi thư rác, lạm dụng, hoặc thực hiện các hành vi gây hại cho người dùng khác.",

        "terms.s4.title": "Trách nhiệm người dùng",
        "terms.s4.text": "Người dùng có trách nhiệm đối với nội dung họ gửi thông qua Nova. Bạn không được sử dụng Nova để truyền tải nội dung xúc phạm, đe dọa, khiêu dâm, vi phạm bản quyền hoặc trái pháp luật.",

        "terms.s5.title": "Server administrators",
        "terms.s5.text": "Quản trị viên server có trách nhiệm cấu hình Nova phù hợp với quy tắc cộng đồng của họ. Server Owner có quyền cao nhất trong việc quản lý cấu hình Nova trên server của mình.",

        "terms.s6.title": "Moderation",
        "terms.s6.text": "Các tính năng moderation được cung cấp để hỗ trợ quản lý server. Chúng tôi không đảm bảo rằng mọi hành động moderation đều thành công hoặc phù hợp trong mọi tình huống. Quản trị viên server có trách nhiệm giám sát và điều chỉnh.",

        "terms.s7.title": "Ban Zone",
        "terms.s7.text": "Tính năng Ban Zone cho phép quản lý người dùng vi phạm quy tắc. Chỉ Server Owner mới có quyền quản lý Ban Zone whitelist. Nova không chịu trách nhiệm về việc Ban Zone được sử dụng sai mục đích.",

        "terms.s8.title": "AI",
        "terms.s8.text": "Tính năng AI sử dụng " + CONFIG.AI_PROVIDER + ". Chúng tôi không đảm bảo rằng nội dung do AI tạo ra luôn chính xác, hoàn chỉnh hoặc phù hợp. Sử dụng thông tin từ AI theo trách nhiệm của riêng bạn.",

        "terms.s9.title": "War / Backup",
        "terms.s9.text": "Tính năng War Ping và Backup Ping được cung cấp để hỗ trợ điều phối hoạt động cộng đồng. Quyền kết thúc (Win, Lose, End) có thể được cấu hình bởi quản trị viên server.",

        "terms.s10.title": "Event",
        "terms.s10.text": "Tính năng Event cho phép tạo và quản lý sự kiện cộng đồng. Người tạo sự kiện có trách nhiệm đảm bảo nội dung và hoạt động sự kiện tuân thủ quy tắc.",

        "terms.s11.title": "Nội dung do người dùng gửi",
        "terms.s11.text": "Bạn giữ quyền sở hữu đối với nội dung bạn gửi thông qua Nova. Bằng cách sử dụng Nova, bạn cấp phép cho chúng tôi xử lý nội dung đó để cung cấp dịch vụ.",

        "terms.s12.title": "Dịch vụ bên thứ ba",
        "terms.s12.text": "Nova tích hợp với các dịch vụ bên thứ ba bao gồm Discord API và " + CONFIG.AI_PROVIDER + ". Chúng tôi không chịu trách nhiệm về tính khả dụng hoặc nội dung của các dịch vụ bên thứ ba.",

        "terms.s13.title": "Tính khả dụng",
        "terms.s13.text": "Chúng tôi không đảm bảo rằng Nova sẽ hoạt động không gián đoạn hoặc không có lỗi. Dịch vụ có thể bị gián đoạn do bảo trì, cập nhật, hoặc sự cố bên thứ ba ngoài tầm kiểm soát của chúng tôi.",

        "terms.s14.title": "Thay đổi tính năng",
        "terms.s14.text": "Chúng tôi có quyền cập nhật, sửa đổi hoặc loại bỏ tính năng của Nova bất cứ lúc nào. Chúng tôi sẽ cố gắng thông báo trước về các thay đổi quan trọng khi có thể.",

        "terms.s15.title": "Chấm dứt sử dụng",
        "terms.s15.text": "Chúng tôi có quyền tạm ngừng hoặc chấm dứt quyền truy cập Nova của bạn nếu bạn vi phạm các điều khoản này. Bạn có thể ngừng sử dụng Nova bất cứ lúc nào bằng cách xóa bot khỏi server.",

        "terms.s16.title": "Thay đổi điều khoản",
        "terms.s16.text": "Chúng tôi có thể cập nhật Điều khoản dịch vụ này theo thời gian. Việc tiếp tục sử dụng Nova sau khi có thay đổi đồng nghĩa với việc bạn chấp nhận điều khoản mới.",

        "terms.s17.title": "Liên hệ",
        "terms.s17.text": "Nếu bạn có câu hỏi về Điều khoản dịch vụ này, vui lòng liên hệ:",

        /* Common */
        "common.select": "Chọn"
    },
    en: {
        /* Navbar */
        "nav.home": "Home",
        "nav.features": "Features",
        "nav.privacy": "Privacy Policy",
        "nav.terms": "Terms of Service",
        "nav.invite": "Invite Nova",

        /* Hero */
        "hero.tagline": "Your intelligent Discord companion.",
        "hero.description": "Chat with AI, manage your community, create War, Backup, Events and more — directly inside Discord.",
        "hero.invite": "Invite Nova",
        "hero.explore": "Explore Features",

        /* Features */
        "features.eyebrow": "Features",
        "features.title": "Powerful features.",
        "features.subtitle": "Everything you need to build and manage your Discord community.",

        "feature.ai.title": "AI Chatbot",
        "feature.ai.desc": "Chat with AI directly inside Discord. Supports AI Chat, Persona, shared history and AI configuration.",
        "feature.ai.powered": "Powered by " + CONFIG.AI_PROVIDER + ".",

        "feature.aiimage.title": "AI Image",
        "feature.aiimage.desc": "Generate AI images directly inside Discord with simple commands.",

        "feature.war.title": "War Ping / Backup Ping",
        "feature.war.desc": "Quickly call members for War or request Backup with thread system, end permissions and /end all.",

        "feature.event.title": "Event",
        "feature.event.desc": "Create and manage events for your community with ease.",

        "feature.banzone.title": "Ban Zone",
        "feature.banzone.desc": "Ban Zone and moderation system with Ban/Mute modes, whitelist and automatic channel recovery.",

        "feature.moderation.title": "Moderation",
        "feature.moderation.desc": "Essential moderation tools for your server with basic commands.",

        "feature.info.title": "Server Information",
        "feature.info.desc": "View detailed information about the bot, server and users.",

        "feature.admin.title": "Admin",
        "feature.admin.desc": "Advanced configuration for Server Owner, Manager and Bot Owner.",

        /* Commands */
        "commands.eyebrow": "Commands",
        "commands.title": "Main commands",
        "commands.subtitle": "Commonly used Nova commands.",

        "cmd.chat": "Chat with AI",
        "cmd.image": "Generate AI images",
        "cmd.ban": "Ban a user",
        "cmd.unban": "Unban a user",
        "cmd.mute": "Mute a user",
        "cmd.unmute": "Unmute a user",
        "cmd.banzone": "Manage Ban Zone",
        "cmd.banwhitelist": "Manage Ban Zone whitelist",
        "cmd.info": "Bot information",
        "cmd.serverinfo": "Server information",
        "cmd.userinfo": "User information",
        "cmd.endall": "End all War/Backup",

        /* Help Menu */
        "help.title": "Help Menu Interface",
        "help.subtitle": "Experience a refined, modern Help Menu.",
        "help.header": "Nova Help Menu",
        "help.section.title": "Help Menu",
        "help.desc": "This is Nova's help menu. Use the dropdown below to view the category you want.",
        "help.categories": "Categories",
        "help.cat.ai": "AI Chatbot",
        "help.cat.war": "War Ping / Backup Ping",
        "help.cat.event": "Event",
        "help.cat.ban": "Ban Zone",
        "help.cat.admin": "Admin",
        "help.tip": "Tip: Pick a category below for details.",
        "help.placeholder": "Make a selection",

        /* CTA */
        "cta.title": "Need help?",
        "cta.subtitle": "Join Nova's support server.",
        "cta.button": "Join Support Server",

        /* Contact */
        "contact.eyebrow": "Contact",
        "contact.title": "Get in touch",
        "contact.subtitle": "Have questions? We'd love to hear from you.",
        "contact.email.label": "Email",
        "contact.owner.label": "Bot Owner",

        /* Footer */
        "footer.tagline": "Your intelligent Discord companion.",
        "footer.owner": "Bot Owner: " + CONFIG.BOT_OWNER,
        "footer.col.links": "Links",
        "footer.col.resources": "Resources",
        "footer.link.home": "Home",
        "footer.link.features": "Features",
        "footer.link.privacy": "Privacy Policy",
        "footer.link.terms": "Terms of Service",
        "footer.link.support": "Support Server",
        "footer.link.contact": "Contact",
        "footer.invite": "Invite Nova",
        "footer.copyright": "© 2026 " + CONFIG.BOT_NAME,
        "footer.effective": "Effective Date: " + CONFIG.EFFECTIVE_DATE_EN,

        /* Privacy Policy */
        "privacy.badge": "Privacy Policy",
        "privacy.title": "Privacy Policy",
        "privacy.effective": "Effective date: " + CONFIG.EFFECTIVE_DATE_EN,

        "privacy.s1.title": "Introduction",
        "privacy.s1.text": "This Privacy Policy explains how Nova collects, uses, and processes information when you use our Discord bot. By using Nova, you agree to the practices described in this policy.",

        "privacy.s2.title": "Data that may be processed",
        "privacy.s2.text": "Nova may process the following types of data to function properly:",
        "privacy.s2.items": [
            "Discord user IDs and server IDs",
            "Message content related to bot commands",
            "Server configuration information",
            "Data related to AI, War, Backup, Event, Ban Zone and Moderation features"
        ],

        "privacy.s3.title": "Discord data",
        "privacy.s3.text": "Nova complies with Discord's Terms of Service and Privacy Policy. We only access data necessary to provide bot functionality and do not share your Discord data with unnecessary third parties.",

        "privacy.s4.title": "AI data",
        "privacy.s4.text": "When using AI features, content you submit may be sent to the AI provider (" + CONFIG.AI_PROVIDER + ") for processing. We do not store AI chat content longer than necessary for bot operation. This information may change depending on the bot's deployment configuration.",

        "privacy.s5.title": "Server data",
        "privacy.s5.text": "Nova stores configuration data separately for each Discord server, including Ban Zone settings, War/Backup roles, help channels and other configuration options. Data is stored independently per server.",

        "privacy.s6.title": "Moderation",
        "privacy.s6.text": "Moderation features such as Ban Zone, /ban, /mute process data related to user behavior within the server. This data is only used for server management purposes and is not shared externally.",

        "privacy.s7.title": "Storage",
        "privacy.s7.text": "Data is stored securely. Specific details about storage infrastructure may change depending on the bot's deployment configuration.",

        "privacy.s8.title": "Third-party services",
        "privacy.s8.text": "Nova uses third-party services including Discord API and the AI provider (" + CONFIG.AI_PROVIDER + "). Usage of these services is governed by each provider's respective privacy policies.",

        "privacy.s9.title": "Security",
        "privacy.s9.text": "We implement reasonable security measures to protect data. However, no method of transmission or storage is completely secure. Specific encryption details may change depending on the bot's deployment configuration.",

        "privacy.s10.title": "Retention period",
        "privacy.s10.text": "Data is retained for as long as necessary to provide the service. The specific retention period may change depending on the bot's deployment configuration.",

        "privacy.s11.title": "Changes to this policy",
        "privacy.s11.text": "We may update this Privacy Policy from time to time. Changes will be announced through appropriate channels. Continued use of Nova after changes constitutes acceptance of the new policy.",

        "privacy.s12.title": "Contact",
        "privacy.s12.text": "If you have questions about this Privacy Policy, please contact us at:",

        /* Terms of Service */
        "terms.badge": "Terms of Service",
        "terms.title": "Terms of Service",
        "terms.effective": "Effective date: " + CONFIG.EFFECTIVE_DATE_EN,
        "terms.disclaimer": "Nova is a third-party Discord bot and is not an official Discord product.",

        "terms.s1.title": "Introduction",
        "terms.s1.text": "These Terms of Service govern your use of the Nova Discord bot. By using Nova, you agree to abide by these terms.",

        "terms.s2.title": "Acceptance of terms",
        "terms.s2.text": "By adding Nova to your Discord server or using any bot commands, you acknowledge that you have read, understood, and agree to these terms. If you do not agree, please do not use Nova.",

        "terms.s3.title": "Using Nova",
        "terms.s3.text": "You agree to use Nova only for lawful purposes and in compliance with Discord's Terms of Service. You may not use Nova to spam, abuse, or engage in harmful behavior toward other users.",

        "terms.s4.title": "User responsibilities",
        "terms.s4.text": "Users are responsible for the content they submit through Nova. You may not use Nova to transmit content that is offensive, threatening, obscene, infringing, or illegal.",

        "terms.s5.title": "Server administrators",
        "terms.s5.text": "Server administrators are responsible for configuring Nova in accordance with their community rules. The Server Owner holds the highest authority in managing Nova's configuration on their server.",

        "terms.s6.title": "Moderation",
        "terms.s6.text": "Moderation features are provided to assist with server management. We do not guarantee that every moderation action will be successful or appropriate in every situation. Server administrators are responsible for oversight and adjustment.",

        "terms.s7.title": "Ban Zone",
        "terms.s7.text": "The Ban Zone feature enables management of users who violate rules. Only the Server Owner may manage the Ban Zone whitelist. Nova is not responsible for misuse of Ban Zone.",

        "terms.s8.title": "AI",
        "terms.s8.text": "AI features use " + CONFIG.AI_PROVIDER + ". We do not guarantee that AI-generated content will always be accurate, complete, or appropriate. Use information from AI at your own discretion.",

        "terms.s9.title": "War / Backup",
        "terms.s9.text": "War Ping and Backup Ping features are provided to assist with coordinating community activities. End permissions (Win, Lose, End) may be configured by server administrators.",

        "terms.s10.title": "Event",
        "terms.s10.text": "The Event feature allows creation and management of community events. Event creators are responsible for ensuring event content and activities comply with the rules.",

        "terms.s11.title": "User-submitted content",
        "terms.s11.text": "You retain ownership of content you submit through Nova. By using Nova, you grant us permission to process that content to provide the service.",

        "terms.s12.title": "Third-party services",
        "terms.s12.text": "Nova integrates with third-party services including Discord API and " + CONFIG.AI_PROVIDER + ". We are not responsible for the availability or content of third-party services.",

        "terms.s13.title": "Availability",
        "terms.s13.text": "We do not guarantee that Nova will operate uninterrupted or error-free. Service may be interrupted due to maintenance, updates, or third-party issues beyond our control.",

        "terms.s14.title": "Feature changes",
        "terms.s14.text": "We reserve the right to update, modify, or remove Nova features at any time. We will attempt to provide advance notice of significant changes when possible.",

        "terms.s15.title": "Termination",
        "terms.s15.text": "We may suspend or terminate your access to Nova if you violate these terms. You may stop using Nova at any time by removing the bot from your server.",

        "terms.s16.title": "Changes to terms",
        "terms.s16.text": "We may update these Terms of Service from time to time. Continued use of Nova after changes constitutes acceptance of the new terms.",

        "terms.s17.title": "Contact",
        "terms.s17.text": "If you have questions about these Terms of Service, please contact us at:",

        /* Common */
        "common.select": "Select"
    }
};

/* ---------- Language Manager ---------- */
const LanguageManager = {
    current: 'vi',
    STORAGE_KEY: 'nova-language',

    init() {
        const saved = localStorage.getItem(this.STORAGE_KEY);
        if (saved === 'en' || saved === 'vi') {
            this.current = saved;
        }
        this.apply();
        this.updateUI();
    },

    set(lang) {
        if (lang !== 'vi' && lang !== 'en') return;
        this.current = lang;
        localStorage.setItem(this.STORAGE_KEY, lang);
        this.apply();
        this.updateUI();
        this.updateMeta();
    },

    apply() {
        const t = TRANSLATIONS[this.current];
        document.documentElement.lang = this.current;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) {
                el.textContent = t[key];
            }
        });

        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const attr = el.getAttribute('data-i18n-attr');
            const key = el.getAttribute('data-i18n-key');
            if (t[key] !== undefined) {
                el.setAttribute(attr, t[key]);
            }
        });

        document.querySelectorAll('[data-i18n-list]').forEach(el => {
            const key = el.getAttribute('data-i18n-list');
            const items = t[key];
            if (Array.isArray(items)) {
                el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
            }
        });

        document.querySelectorAll('[data-href]').forEach(el => {
            const hrefKey = el.getAttribute('data-href');
            if (hrefKey === 'invite') {
                el.href = CONFIG.BOT_INVITE_URL;
            } else if (hrefKey === 'support') {
                el.href = CONFIG.SUPPORT_SERVER_URL;
            } else if (hrefKey === 'email') {
                el.href = 'mailto:' + CONFIG.CONTACT_EMAIL;
            }
        });
    },

    updateUI() {
        document.querySelectorAll('.lang-switch').forEach(sw => {
            sw.classList.remove('vi', 'en');
            sw.classList.add(this.current);
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            const isActive = btn.getAttribute('data-lang') === this.current;
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
    },

    updateMeta() {
        const t = TRANSLATIONS[this.current];
        const page = document.body.getAttribute('data-page');

        if (page === 'index') {
            document.title = this.current === 'vi'
                ? 'Nova — Trợ lý thông minh cho Discord'
                : 'Nova — Your Intelligent Discord Companion';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', this.current === 'vi'
                    ? 'Nova là Discord bot đa năng hỗ trợ AI, moderation, War, Backup, Event và nhiều công cụ quản lý cộng đồng.'
                    : 'Nova is a versatile Discord bot for AI, moderation, War, Backup, Events and community management.');
            }
        } else if (page === 'privacy') {
            document.title = this.current === 'vi'
                ? 'Chính sách bảo mật — Nova'
                : 'Privacy Policy — Nova';
        } else if (page === 'terms') {
            document.title = this.current === 'vi'
                ? 'Điều khoản dịch vụ — Nova'
                : 'Terms of Service — Nova';
        }
    },

    t(key) {
        return TRANSLATIONS[this.current][key] || key;
    }
};

/* ---------- Navbar Scroll Effect ---------- */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const onScroll = () => {
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

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
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 320);
        document.body.style.overflow = '';
    };

    btn.addEventListener('click', () => {
        btn.classList.contains('open') ? close() : open();
    });

    overlay.addEventListener('click', close);

    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', close);
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && btn.classList.contains('open')) {
            close();
        }
    });
}

/* ---------- Language Switch ---------- */
function initLanguageSwitch() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            LanguageManager.set(lang);
        });

        btn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const lang = btn.getAttribute('data-lang');
                LanguageManager.set(lang);
            }
        });
    });
}

/* ---------- Scroll Reveal ---------- */
function initScrollReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const stagger = parseInt(el.getAttribute('data-stagger') || '0', 10);
                setTimeout(() => {
                    el.classList.add('visible');
                }, stagger * 60);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll('.reveal').forEach((el, i) => {
        if (!el.hasAttribute('data-stagger')) {
            const parent = el.closest('.features-grid, .commands-grid, .contact-grid');
            if (parent) {
                const siblings = Array.from(parent.querySelectorAll('.reveal'));
                el.setAttribute('data-stagger', siblings.indexOf(el));
            }
        }
        observer.observe(el);
    });
}

/* ---------- iOS Dropdown ---------- */
function initIOSDropdown() {
    document.querySelectorAll('.ios-dropdown').forEach(dropdown => {
        const trigger = dropdown.querySelector('.ios-dropdown-trigger');
        const menu = dropdown.querySelector('.ios-dropdown-menu');
        const options = dropdown.querySelectorAll('.ios-dropdown-menu li');
        const label = dropdown.querySelector('.ios-dropdown-label');
        if (!trigger || !menu) return;

        const open = () => {
            dropdown.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        };

        const close = () => {
            dropdown.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        };

        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.contains('open') ? close() : open();
        });

        options.forEach(opt => {
            opt.addEventListener('click', () => {
                options.forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                if (label) label.textContent = opt.textContent.trim();
                close();
            });
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) close();
        });

        trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') close();
        });
    });
}

/* ---------- Card 3D Tilt (desktop only) ---------- */
function initCardTilt() {
    const isMobile = window.matchMedia('(hover: none)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || prefersReduced) return;

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -3;
            const rotateY = ((x - centerX) / centerX) * 3;

            card.style.transform = `translateY(-6px) perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });
}

/* ---------- Page Transitions ---------- */
function initPageTransitions() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    document.body.classList.add('page-entering');
    setTimeout(() => document.body.classList.remove('page-entering'), 500);

    document.querySelectorAll('a[href^="index.html"], a[href^="privacy-policy.html"], a[href^="terms-of-service.html"], a[href="./index.html"], a[href="./privacy-policy.html"], a[href="./terms-of-service.html"], a[href="/"], a[href="#features"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) return;
            if (prefersReduced) return;

            e.preventDefault();
            document.body.classList.add('page-transitioning');
            setTimeout(() => {
                window.location.href = href;
            }, 260);
        });
    });
}

/* ---------- Smooth Scroll for Anchor Links ---------- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
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

/* ---------- Invite Buttons ---------- */
function initInviteButtons() {
    document.querySelectorAll('[data-href="invite"]').forEach(btn => {
        btn.href = CONFIG.BOT_INVITE_URL;
        btn.setAttribute('target', '_blank');
        btn.setAttribute('rel', 'noopener noreferrer');
    });
}

/* ---------- Avatar Fallback ---------- */
function initAvatarFallback() {
    const avatar = document.querySelector('.hero-avatar img');
    if (avatar) {
        avatar.addEventListener('error', () => {
            avatar.style.display = 'none';
        });
    }
}

/* ---------- Initialize Everything ---------- */
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
    initNavbarScroll();
    initMobileMenu();
    initLanguageSwitch();
    initScrollReveal();
    initIOSDropdown();
    initCardTilt();
    initPageTransitions();
    initSmoothScroll();
    initInviteButtons();
    initAvatarFallback();
});
