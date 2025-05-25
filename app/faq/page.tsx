"use client";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import Footer from "../components/sections/Footer";
import { useCountryStore } from "../../lib/store";

export default function FAQPage() {
  const { selectedCountry } = useCountryStore();

  // Localized content function
  const getLocalizedContent = useMemo(() => {
    if (selectedCountry.useEnglishContent) {
      return {
        title: "Frequently Asked Questions",
        subtitle: "Find answers to common questions about our medical supplies and services",
        ctaTitle: "Can't find the answer you need?",
        ctaSubtitle: "Our team is ready to assist with any specific questions about our products, ordering process, or technical specifications. Reach out to us directly for personalized support.",
        emailSupport: "Email Support",
        liveChat: "Live Chat",
        categories: {
          productInfo: "Product Information",
          ordersShipping: "Orders & Shipping", 
          productUsage: "Product Usage & Safety",
          techSpecs: "Technical Specifications"
        },
        faqData: [
          {
            category: "Product Information",
            questions: [
              {
                id: 1,
                question: "What certifications do your medical products have?",
                answer: "Our medical products are certified according to international standards including ISO 13485:2016, CE certification, and FDA registration where applicable. All our products meet or exceed the required quality and safety standards for their respective categories. You can view our full list of certifications on our Certificates page."
              },
              {
                id: 2,
                question: "Are your masks and PPE appropriate for medical use?",
                answer: "Yes, our masks and PPE are specifically designed for medical use. Our 3-ply masks meet EN 14683 Type IIR standards with ≥98% bacterial filtration efficiency (BFE), while our N95 respirators are NIOSH-approved with 95% filtration efficiency for airborne particles. All our PPE products undergo rigorous testing to ensure they provide the required protection for healthcare professionals."
              },
              {
                id: 3,
                question: "What materials are used in your surgical drapes and gowns?",
                answer: "Our surgical drapes and gowns are made using high-quality SMS (Spunbond-Meltblown-Spunbond) fabric in various weights (from 30 to 50 gsm). This material provides an effective barrier against fluids and microorganisms while remaining comfortable and breathable. We also offer reinforced options with additional fluid-resistant layers for high-risk procedures."
              }
            ]
          },
          {
            category: "Orders & Shipping",
            questions: [
              {
                id: 4,
                question: "What is the minimum order quantity (MOQ) for your products?",
                answer: "Our minimum order quantities vary by product type. For standard items like masks and gloves, our MOQs typically start at 10,000 units. For specialized items like surgical drapes or coveralls, MOQs may start at 1,000 units. For bulk orders or customized products, please contact our sales team for specific MOQ information."
              },
              {
                id: 5,
                question: "How long does shipping take and which countries do you deliver to?",
                answer: "We ship worldwide to over 80 countries. Standard shipping times vary by destination: 7-10 business days for Europe, 10-15 days for North America and Middle East, and 15-20 days for other regions. Express shipping options are available for urgent orders. We handle all export documentation and can recommend shipping partners for specific regions."
              },
              {
                id: 6,
                question: "Do you offer customized packaging or private labeling?",
                answer: "Yes, we offer customized packaging and private labeling services for bulk orders. This includes custom boxes, packaging inserts, and product labeling with your brand logo and information. Custom packaging requires a minimum order quantity and additional lead time, typically 2-3 weeks beyond standard production times."
              }
            ]
          },
          {
            category: "Product Usage & Safety",
            questions: [
              {
                id: 7,
                question: "What is the shelf life of your medical supplies?",
                answer: "The shelf life varies by product type. Masks, gloves, and other disposable items typically have a 3-year shelf life when stored properly in original packaging at room temperature in dry conditions. Sterile products like surgical drapes have a shelf life of 5 years when the packaging remains intact. Each product package is clearly marked with manufacturing and expiration dates."
              },
              {
                id: 8,
                question: "Are your products latex-free?",
                answer: "Yes, all our medical supplies including gloves, masks, and other PPE are 100% latex-free to prevent allergic reactions. Our nitrile examination gloves are specifically designed to provide the same elasticity and comfort as latex while being suitable for individuals with latex allergies."
              },
              {
                id: 9,
                question: "How should I dispose of used medical supplies?",
                answer: "Used medical supplies should be disposed of according to local regulations for medical waste. Our biodegradable waste disposal bags are specifically designed for the safe containment of used medical supplies. For items potentially contaminated with infectious materials, we recommend following your facility's protocols for biohazardous waste management."
              }
            ]
          },
          {
            category: "Technical Specifications",
            questions: [
              {
                id: 10,
                question: "What are the filtration specifications of your N95 respirators?",
                answer: "Our N95 respirators provide at least 95% filtration efficiency against non-oil-based particles and aerosols as small as 0.3 microns. They meet NIOSH 42 CFR 84 standards and feature a secure fit with adjustable nose bridges and elastic head straps. Each batch undergoes testing for filtration efficiency, breathing resistance, and fit performance."
              },
              {
                id: 11,
                question: "What is the fluid resistance level of your surgical gowns?",
                answer: "Our surgical gowns are available in multiple AAMI levels: Level 1 (minimal fluid resistance), Level 2 (low fluid resistance), Level 3 (moderate fluid resistance), and Level 4 (high fluid resistance). The Level 4 gowns provide protection against penetration by blood and body fluids under pressure and are suitable for long, fluid-intensive procedures."
              },
              {
                id: 12,
                question: "Are your biodegradable waste bags suitable for autoclaving?",
                answer: "Our standard biodegradable waste bags are not autoclave-safe as they have a melting point of approximately 90°C. However, we do offer specialized autoclave-safe waste bags made from high-temperature resistant biodegradable materials that can withstand temperatures up to 135°C, suitable for steam sterilization processes."
              }
            ]
          }
        ]
      };
    }

    // Localized content for non-English countries
    switch (selectedCountry.code) {
      case 'DE':
        return {
          title: "Häufig gestellte Fragen",
          subtitle: "Finden Sie Antworten auf häufige Fragen zu unseren medizinischen Produkten und Dienstleistungen",
          ctaTitle: "Können Sie die benötigte Antwort nicht finden?",
          ctaSubtitle: "Unser Team ist bereit, bei spezifischen Fragen zu unseren Produkten, Bestellprozessen oder technischen Spezifikationen zu helfen. Kontaktieren Sie uns direkt für persönliche Unterstützung.",
          emailSupport: "E-Mail-Support",
          liveChat: "Live-Chat",
          categories: {
            productInfo: "Produktinformationen",
            ordersShipping: "Bestellungen & Versand",
            productUsage: "Produktverwendung & Sicherheit",
            techSpecs: "Technische Spezifikationen"
          },
          faqData: [
            {
              category: "Produktinformationen",
              questions: [
                {
                  id: 1,
                  question: "Welche Zertifizierungen haben Ihre medizinischen Produkte?",
                  answer: "Unsere medizinischen Produkte sind nach internationalen Standards zertifiziert, einschließlich ISO 13485:2016, CE-Zertifizierung und FDA-Registrierung, wo zutreffend. Alle unsere Produkte erfüllen oder übertreffen die erforderlichen Qualitäts- und Sicherheitsstandards für ihre jeweiligen Kategorien."
                },
                {
                  id: 2,
                  question: "Sind Ihre Masken und PSA für den medizinischen Gebrauch geeignet?",
                  answer: "Ja, unsere Masken und PSA sind speziell für den medizinischen Gebrauch entwickelt. Unsere 3-lagigen Masken erfüllen EN 14683 Typ IIR Standards mit ≥98% bakterieller Filtrationseffizienz (BFE), während unsere N95-Atemschutzmasken NIOSH-zugelassen sind."
                },
                {
                  id: 3,
                  question: "Welche Materialien werden in Ihren chirurgischen Abdeckungen und Kitteln verwendet?",
                  answer: "Unsere chirurgischen Abdeckungen und Kittel werden aus hochwertigem SMS-Gewebe (Spunbond-Meltblown-Spunbond) in verschiedenen Gewichten hergestellt. Dieses Material bietet eine wirksame Barriere gegen Flüssigkeiten und Mikroorganismen."
                }
              ]
            },
            {
              category: "Bestellungen & Versand",
              questions: [
                {
                  id: 4,
                  question: "Was ist die Mindestbestellmenge (MOQ) für Ihre Produkte?",
                  answer: "Unsere Mindestbestellmengen variieren je nach Produkttyp. Für Standardartikel wie Masken und Handschuhe beginnen unsere MOQs typischerweise bei 10.000 Einheiten. Für spezialisierte Artikel können MOQs bei 1.000 Einheiten beginnen."
                },
                {
                  id: 5,
                  question: "Wie lange dauert der Versand und in welche Länder liefern Sie?",
                  answer: "Wir versenden weltweit in über 80 Länder. Standard-Versandzeiten variieren je nach Zielort: 7-10 Werktage für Europa, 10-15 Tage für Nordamerika und den Nahen Osten, und 15-20 Tage für andere Regionen."
                },
                {
                  id: 6,
                  question: "Bieten Sie angepasste Verpackungen oder Private Labeling an?",
                  answer: "Ja, wir bieten angepasste Verpackungen und Private Labeling-Services für Großbestellungen an. Dies umfasst individuelle Boxen, Verpackungseinlagen und Produktetikettierung mit Ihrem Markenlogo."
                }
              ]
            },
            {
              category: "Produktverwendung & Sicherheit",
              questions: [
                {
                  id: 7,
                  question: "Wie lange sind Ihre medizinischen Produkte haltbar?",
                  answer: "Die Haltbarkeit variiert je nach Produkttyp. Masken, Handschuhe und andere Einwegartikel haben typischerweise eine 3-jährige Haltbarkeit bei ordnungsgemäßer Lagerung in der Originalverpackung."
                },
                {
                  id: 8,
                  question: "Sind Ihre Produkte latexfrei?",
                  answer: "Ja, alle unsere medizinischen Produkte einschließlich Handschuhe, Masken und andere PSA sind 100% latexfrei, um allergische Reaktionen zu verhindern."
                },
                {
                  id: 9,
                  question: "Wie sollte ich gebrauchte medizinische Produkte entsorgen?",
                  answer: "Gebrauchte medizinische Produkte sollten gemäß den örtlichen Vorschriften für medizinische Abfälle entsorgt werden. Unsere biologisch abbaubaren Abfallentsorgungsbeutel sind speziell für die sichere Aufbewahrung entwickelt."
                }
              ]
            },
            {
              category: "Technische Spezifikationen",
              questions: [
                {
                  id: 10,
                  question: "Was sind die Filtrationsspezifikationen Ihrer N95-Atemschutzmasken?",
                  answer: "Unsere N95-Atemschutzmasken bieten mindestens 95% Filtrationseffizienz gegen nicht-ölbasierte Partikel und Aerosole so klein wie 0,3 Mikron. Sie erfüllen NIOSH 42 CFR 84 Standards."
                },
                {
                  id: 11,
                  question: "Quel est le niveau de résistance aux fluides de vos blouses chirurgicales ?",
                  answer: "Nos blouses chirurgicales sont disponibles en plusieurs niveaux AAMI : Niveau 1 (résistance minimale), Niveau 2 (faible), Niveau 3 (modérée) et Niveau 4 (haute résistance aux fluides)."
                },
                {
                  id: 12,
                  question: "Vos sacs à déchets biodégradables conviennent-ils à l'autoclavage ?",
                  answer: "Nos sacs à déchets biodégradables standard ne sont pas sûrs pour l'autoclave car ils ont un point de fusion d'environ 90°C. Cependant, nous offrons des sacs spécialisés résistants aux hautes températures."
                }
              ]
            }
          ]
        };

      case 'FR':
        return {
          title: "Questions Fréquemment Posées",
          subtitle: "Trouvez des réponses aux questions courantes sur nos fournitures médicales et services",
          ctaTitle: "Vous ne trouvez pas la réponse dont vous avez besoin ?",
          ctaSubtitle: "Notre équipe est prête à vous aider avec toute question spécifique sur nos produits, processus de commande ou spécifications techniques. Contactez-nous directement pour un support personnalisé.",
          emailSupport: "Support Email",
          liveChat: "Chat en Direct",
          categories: {
            productInfo: "Informations Produit",
            ordersShipping: "Commandes & Expédition",
            productUsage: "Utilisation & Sécurité des Produits",
            techSpecs: "Spécifications Techniques"
          },
          faqData: [
            {
              category: "Informations Produit",
              questions: [
                {
                  id: 1,
                  question: "Quelles certifications ont vos produits médicaux ?",
                  answer: "Nos produits médicaux sont certifiés selon les normes internationales incluant ISO 13485:2016, certification CE, et enregistrement FDA le cas échéant. Tous nos produits répondent ou dépassent les normes de qualité et sécurité requises."
                },
                {
                  id: 2,
                  question: "Vos masques et EPI sont-ils appropriés pour un usage médical ?",
                  answer: "Oui, nos masques et EPI sont spécifiquement conçus pour un usage médical. Nos masques 3 plis répondent aux normes EN 14683 Type IIR avec ≥98% d'efficacité de filtration bactérienne (BFE)."
                },
                {
                  id: 3,
                  question: "Quels matériaux sont utilisés dans vos champs et blouses chirurgicaux ?",
                  answer: "Nos champs et blouses chirurgicaux sont fabriqués avec du tissu SMS (Spunbond-Meltblown-Spunbond) de haute qualité en différents grammages. Ce matériau fournit une barrière efficace contre les fluides et micro-organismes."
                }
              ]
            },
            {
              category: "Commandes & Expédition",
              questions: [
                {
                  id: 4,
                  question: "Quelle est la quantité minimum de commande (MOQ) pour vos produits ?",
                  answer: "Nos quantités minimum de commande varient selon le type de produit. Pour les articles standards comme les masques et gants, nos MOQ commencent typiquement à 10 000 unités."
                },
                {
                  id: 5,
                  question: "Combien de temps prend l'expédition et dans quels pays livrez-vous ?",
                  answer: "Nous expédions dans le monde entier vers plus de 80 pays. Les délais d'expédition standard varient selon la destination : 7-10 jours ouvrables pour l'Europe, 10-15 jours pour l'Amérique du Nord."
                },
                {
                  id: 6,
                  question: "Offrez-vous des emballages personnalisés ou du marquage privé ?",
                  answer: "Oui, nous offrons des services d'emballage personnalisé et de marquage privé pour les commandes en gros. Cela inclut des boîtes personnalisées, inserts d'emballage et étiquetage avec votre logo."
                }
              ]
            },
            {
              category: "Utilisation & Sécurité des Produits",
              questions: [
                {
                  id: 7,
                  question: "Quelle est la durée de vie de vos fournitures médicales ?",
                  answer: "La durée de vie varie selon le type de produit. Les masques, gants et autres articles jetables ont typiquement une durée de vie de 3 ans lorsque stockés correctement dans l'emballage original."
                },
                {
                  id: 8,
                  question: "Vos produits sont-ils sans latex ?",
                  answer: "Oui, toutes nos fournitures médicales incluant gants, masques et autres EPI sont 100% sans latex pour prévenir les réactions allergiques."
                },
                {
                  id: 9,
                  question: "Comment dois-je éliminer les fournitures médicales usagées ?",
                  answer: "Les fournitures médicales usagées doivent être éliminées selon les réglementations locales pour les déchets médicaux. Nos sacs d'élimination biodégradables sont spécifiquement conçus pour le confinement sécurisé."
                }
              ]
            },
            {
              category: "Spécifications Techniques",
              questions: [
                {
                  id: 10,
                  question: "Quelles sont les spécifications de filtration de vos respirateurs N95 ?",
                  answer: "Nos respirateurs N95 fournissent au moins 95% d'efficacité de filtration contre les particules et aérosols não oleosos tão pequenos quanto 0,3 microns. Ils répondent aux normes NIOSH 42 CFR 84."
                },
                {
                  id: 11,
                  question: "Quel est le niveau de résistance aux fluides de vos blouses chirurgicales ?",
                  answer: "Nos blouses chirurgicales sont disponibles en plusieurs niveaux AAMI : Niveau 1 (résistance minimale), Niveau 2 (faible), Niveau 3 (modérée) et Niveau 4 (haute résistance aux fluides)."
                },
                {
                  id: 12,
                  question: "Vos sacs à déchets biodégradables conviennent-ils à l'autoclavage ?",
                  answer: "Nos sacs à déchets biodégradables standard ne sont pas sûrs pour l'autoclave car ils ont un point de fusion d'environ 90°C. Cependant, nous offrons des sacs spécialisés résistants aux hautes températures."
                }
              ]
            }
          ]
        };

      case 'JP':
        return {
          title: "よくある質問",
          subtitle: "医療用品とサービスに関するよくある質問への回答を見つけてください",
          ctaTitle: "必要な回答が見つかりませんか？",
          ctaSubtitle: "私たちのチームは、製品、注文プロセス、技術仕様に関する具体的な質問にお答えする準備ができています。個別サポートについては直接お問い合わせください。",
          emailSupport: "メールサポート",
          liveChat: "ライブチャット",
          categories: {
            productInfo: "製品情報",
            ordersShipping: "注文・配送",
            productUsage: "製品使用・安全性",
            techSpecs: "技術仕様"
          },
          faqData: [
            {
              category: "製品情報",
              questions: [
                {
                  id: 1,
                  question: "医療製品にはどのような認証がありますか？",
                  answer: "当社の医療製品は、ISO 13485:2016、CE認証、該当する場合はFDA登録を含む国際基準に従って認証されています。すべての製品は、それぞれのカテゴリーに必要な品質・安全基準を満たすか、それを上回っています。"
                },
                {
                  id: 2,
                  question: "マスクとPPEは医療用に適していますか？",
                  answer: "はい、当社のマスクとPPEは医療用に特別に設計されています。3層マスクはEN 14683 Type IIR基準を満たし、≥98%の細菌濾過効率（BFE）を持っています。"
                },
                {
                  id: 3,
                  question: "手術用ドレープとガウンにはどのような材料が使用されていますか？",
                  answer: "手術用ドレープとガウンは、様々な重量（30〜50gsm）の高品質SMS（スパンボンド-メルトブローン-スパンボンド）生地を使用して作られています。この材料は液体と微生物に対する効果的なバリアを提供します。"
                }
              ]
            },
            {
              category: "注文・配送",
              questions: [
                {
                  id: 4,
                  question: "製品の最小注文数量（MOQ）はどのくらいですか？",
                  answer: "最小注文数量は製品タイプによって異なります。マスクや手袋などの標準アイテムの場合、MOQは通常10,000個から始まります。専門アイテムの場合は1,000個から始まる場合があります。"
                },
                {
                  id: 5,
                  question: "配送にはどのくらい時間がかかり、どの国に配送していますか？",
                  answer: "80カ国以上に世界中に配送しています。標準配送時間は目的地によって異なります：ヨーロッパは7-10営業日、北米と中東は10-15日、その他の地域は15-20日です。"
                },
                {
                  id: 6,
                  question: "カスタマイズされた包装やプライベートラベリングを提供していますか？",
                  answer: "はい、大量注文に対してカスタマイズされた包装とプライベートラベリングサービスを提供しています。これには、カスタムボックス、包装インサート、ブランドロゴ付き製品ラベリングが含まれます。"
                }
              ]
            },
            {
              category: "製品使用・安全性",
              questions: [
                {
                  id: 7,
                  question: "医療用品の保存期間はどのくらいですか？",
                  answer: "保存期間は製品タイプによって異なります。マスク、手袋、その他の使い捨てアイテムは、元の包装で室温の乾燥した条件で適切に保管された場合、通常3年の保存期間があります。"
                },
                {
                  id: 8,
                  question: "製品はラテックスフリーですか？",
                  answer: "はい、手袋、マスク、その他のPPEを含むすべての医療用品は、アレルギー反応を防ぐために100%ラテックスフリーです。"
                },
                {
                  id: 9,
                  question: "使用済み医療用品はどのように廃棄すべきですか？",
                  answer: "使用済み医療用品は、医療廃棄物に関する地域の規制に従って廃棄する必要があります。当社の生分解性廃棄物処理袋は、使用済み医療用品の安全な封じ込めのために特別に設計されています。"
                }
              ]
            },
            {
              category: "技術仕様",
              questions: [
                {
                  id: 10,
                  question: "N95レスピレーターの濾過仕様は何ですか？",
                  answer: "当社のN95レスピレーターは、0.3ミクロンの小さな非油性粒子とエアロゾルに対して少なくとも95%の濾過効率を提供します。NIOSH 42 CFR 84基準を満たしています。"
                },
                {
                  id: 11,
                  question: "手術用ガウンの液体抵抗レベルは何ですか？",
                  answer: "手術用ガウンは複数のAAMIレベルで利用可能です：レベル1（最小液体抵抗）、レベル2（低）、レベル3（中程度）、レベル4（高液体抵抗）。"
                },
                {
                  id: 12,
                  question: "生分解性廃棄物袋はオートクレーブに適していますか？",
                  answer: "標準的な生分解性廃棄物袋は約90°Cの融点を持つため、オートクレーブ安全ではありません。しかし、135°Cまでの温度に耐えられる高温耐性生分解性材料で作られた専用オートクレーブ安全廃棄物袋を提供しています。"
                }
              ]
            }
          ]
        };

      case 'CN':
        return {
          title: "常见问题",
          subtitle: "查找有关我们医疗用品和服务的常见问题答案",
          ctaTitle: "找不到您需要的答案？",
          ctaSubtitle: "我们的团队随时准备协助解答有关我们产品、订购流程或技术规格的具体问题。请直接联系我们获得个性化支持。",
          emailSupport: "邮件支持",
          liveChat: "在线聊天",
          categories: {
            productInfo: "产品信息",
            ordersShipping: "订单与运输",
            productUsage: "产品使用与安全",
            techSpecs: "技术规格"
          },
          faqData: [
            {
              category: "产品信息",
              questions: [
                {
                  id: 1,
                  question: "您的医疗产品有哪些认证？",
                  answer: "我们的医疗产品按照国际标准认证，包括ISO 13485:2016、CE认证，以及适用的FDA注册。我们所有产品都达到或超过其各自类别所需的质量和安全标准。"
                },
                {
                  id: 2,
                  question: "您的口罩和PPE适合医疗使用吗？",
                  answer: "是的，我们的口罩和PPE专门为医疗使用而设计。我们的三层口罩符合EN 14683 Type IIR标准，细菌过滤效率(BFE)≥98%，而我们的N95呼吸器经NIOSH批准。"
                },
                {
                  id: 3,
                  question: "您的手术铺单和手术衣使用什么材料？",
                  answer: "我们的手术铺单和手术衣采用高质量SMS（纺粘-熔喷-纺粘）织物制成，重量从30到50克/平方米不等。这种材料在保持舒适透气的同时，提供对液体和微生物的有效屏障。"
                }
              ]
            },
            {
              category: "订单与运输",
              questions: [
                {
                  id: 4,
                  question: "您产品的最小订购量(MOQ)是多少？",
                  answer: "我们的最小订购量因产品类型而异。对于口罩和手套等标准物品，我们的MOQ通常从10,000个开始。对于手术铺单或防护服等专业物品，MOQ可能从1,000个开始。"
                },
                {
                  id: 5,
                  question: "运输需要多长时间，您向哪些国家发货？",
                  answer: "我们向全球80多个国家发货。标准运输时间因目的地而异：欧洲7-10个工作日，北美和中东10-15天，其他地区15-20天。紧急订单可选择快递运输。"
                },
                {
                  id: 6,
                  question: "您提供定制包装或贴牌服务吗？",
                  answer: "是的，我们为大批量订单提供定制包装和贴牌服务。这包括定制盒子、包装插页，以及带有您品牌标志和信息的产品标签。定制包装需要最小订购量和额外交货时间。"
                }
              ]
            },
            {
              category: "产品使用与安全",
              questions: [
                {
                  id: 7,
                  question: "您的医疗用品保质期是多长？",
                  answer: "保质期因产品类型而异。口罩、手套和其他一次性物品在室温干燥条件下原包装正确储存时，通常有3年保质期。手术铺单等无菌产品在包装完整时保质期为5年。"
                },
                {
                  id: 8,
                  question: "您的产品不含乳胶吗？",
                  answer: "是的，我们所有医疗用品包括手套、口罩和其他PPE都是100%不含乳胶的，以防止过敏反应。我们的丁腈检查手套专门设计为提供与乳胶相同的弹性和舒适性。"
                },
                {
                  id: 9,
                  question: "应该如何处置使用过的医疗用品？",
                  answer: "使用过的医疗用品应按照当地医疗废物法规进行处置。我们的可生物降解废物处理袋专门设计用于安全容纳使用过的医疗用品。"
                }
              ]
            },
            {
              category: "技术规格",
              questions: [
                {
                  id: 10,
                  question: "您的N95呼吸器的过滤规格是什么？",
                  answer: "我们的N95呼吸器对小至0.3微米的非油性颗粒和气溶胶提供至少95%的过滤效率。它们符合NIOSH 42 CFR 84标准，具有可调节鼻梁和弹性头带的安全贴合。"
                },
                {
                  id: 11,
                  question: "您的手术衣的液体阻力水平是什么？",
                  answer: "我们的手术衣有多个AAMI级别：1级（最小液体阻力）、2级（低液体阻力）、3级（中等液体阻力）和4级（高液体阻力）。4级手术衣在压力下防止血液和体液渗透。"
                },
                {
                  id: 12,
                  question: "您的可生物降解废物袋适合高温消毒吗？",
                  answer: "我们的标准可生物降解废物袋不适合高温消毒，因为它们的熔点约为90°C。但是，我们确实提供由耐高温可生物降解材料制成的专用高温消毒安全废物袋。"
                }
              ]
            }
          ]
        };

      case 'BR':
        return {
          title: "Perguntas Frequentes",
          subtitle: "Encontre respostas para perguntas comuns sobre nossos suprimentos médicos e serviços",
          ctaTitle: "Não consegue encontrar a resposta que precisa?",
          ctaSubtitle: "Nossa equipe está pronta para ajudar com qualquer pergunta específica sobre nossos produtos, processo de pedidos ou especificações técnicas. Entre em contato conosco diretamente para suporte personalizado.",
          emailSupport: "Suporte por Email",
          liveChat: "Chat ao Vivo",
          categories: {
            productInfo: "Informações do Produto",
            ordersShipping: "Pedidos e Envio",
            productUsage: "Uso e Segurança do Produto",
            techSpecs: "Especificações Técnicas"
          },
          faqData: [
            {
              category: "Informações do Produto",
              questions: [
                {
                  id: 1,
                  question: "Quais certificações seus produtos médicos possuem?",
                  answer: "Nossos produtos médicos são certificados de acordo com padrões internacionais incluindo ISO 13485:2016, certificação CE e registro FDA quando aplicável. Todos os nossos produtos atendem ou excedem os padrões de qualidade e segurança necessários."
                },
                {
                  id: 2,
                  question: "Suas máscaras e EPIs são apropriados para uso médico?",
                  answer: "Sim, nossas máscaras e EPIs são especificamente projetados para uso médico. Nossas máscaras de 3 camadas atendem aos padrões EN 14683 Tipo IIR com ≥98% de eficiência de filtração bacteriana (BFE)."
                },
                {
                  id: 3,
                  question: "Quais materiais são usados em seus campos e aventais cirúrgicos?",
                  answer: "Nossos campos e aventais cirúrgicos são feitos usando tecido SMS (Spunbond-Meltblown-Spunbond) de alta qualidade em vários pesos. Este material fornece uma barreira eficaz contra fluidos e microorganismos."
                }
              ]
            },
            {
              category: "Pedidos e Envio",
              questions: [
                {
                  id: 4,
                  question: "Qual é a quantidade mínima de pedido (MOQ) para seus produtos?",
                  answer: "Nossas quantidades mínimas de pedido variam por tipo de produto. Para itens padrão como máscaras e luvas, nossos MOQs tipicamente começam em 10.000 unidades. Para itens especializados, MOQs podem começar em 1.000 unidades."
                },
                {
                  id: 5,
                  question: "Quanto tempo leva o envio e para quais países vocês entregam?",
                  answer: "Enviamos mundialmente para mais de 80 países. Tempos de envio padrão variam por destino: 7-10 dias úteis para Europa, 10-15 dias para América do Norte e Oriente Médio, e 15-20 dias para outras regiões."
                },
                {
                  id: 6,
                  question: "Vocês oferecem embalagem personalizada ou marca própria?",
                  answer: "Sim, oferecemos serviços de embalagem personalizada e marca própria para pedidos em volume. Isso inclui caixas personalizadas, inserções de embalagem e rotulagem de produtos com seu logo da marca."
                }
              ]
            },
            {
              category: "Uso e Segurança do Produto",
              questions: [
                {
                  id: 7,
                  question: "Qual é a vida útil de seus suprimentos médicos?",
                  answer: "A vida útil varia por tipo de produto. Máscaras, luvas e outros itens descartáveis tipicamente têm vida útil de 3 anos quando armazenados adequadamente na embalagem original em temperatura ambiente."
                },
                {
                  id: 8,
                  question: "Seus produtos são livres de látex?",
                  answer: "Sim, todos os nossos suprimentos médicos incluindo luvas, máscaras e outros EPIs são 100% livres de látex para prevenir reações alérgicas."
                },
                {
                  id: 9,
                  question: "Como devo descartar suprimentos médicos usados?",
                  answer: "Suprimentos médicos usados devem ser descartados de acordo com regulamentações locais para resíduos médicos. Nossos sacos de descarte biodegradáveis são especificamente projetados para contenção segura."
                }
              ]
            },
            {
              category: "Especificações Técnicas",
              questions: [
                {
                  id: 10,
                  question: "Quais são as especificações de filtração de seus respiradores N95?",
                  answer: "Nossos respiradores N95 fornecem pelo menos 95% de eficiência de filtração contra partículas e aerossóis não oleosos tão pequenos quanto 0,3 mícrons. Eles atendem aos padrões NIOSH 42 CFR 84."
                },
                {
                  id: 11,
                  question: "Qual é o nível de resistência a fluidos de seus aventais cirúrgicos?",
                  answer: "Nossos aventais cirúrgicos estão disponíveis em múltiplos níveis AAMI: Nível 1 (resistência mínima a fluidos), Nível 2 (baixa), Nível 3 (moderada) e Nível 4 (alta resistência a fluidos)."
                },
                {
                  id: 12,
                  question: "Seus sacos de resíduos biodegradáveis são adequados para autoclavagem?",
                  answer: "Nossos sacos de resíduos biodegradáveis padrão não são seguros para autoclave pois têm ponto de fusão de aproximadamente 90°C. No entanto, oferecemos sacos especializados resistentes a altas temperaturas."
                }
              ]
            }
          ]
        };

      default:
        // Fallback to English for any other country
        return {
          title: "Frequently Asked Questions",
          subtitle: "Find answers to common questions about our medical supplies and services",
          ctaTitle: "Can't find the answer you need?",
          ctaSubtitle: "Our team is ready to assist with any specific questions about our products, ordering process, or technical specifications. Reach out to us directly for personalized support.",
          emailSupport: "Email Support",
          liveChat: "Live Chat",
          categories: {
            productInfo: "Product Information",
            ordersShipping: "Orders & Shipping",
            productUsage: "Product Usage & Safety",
            techSpecs: "Technical Specifications"
          },
          faqData: [
            {
              category: "Product Information",
              questions: [
                {
                  id: 1,
                  question: "What certifications do your medical products have?",
                  answer: "Our medical products are certified according to international standards including ISO 13485:2016, CE certification, and FDA registration where applicable. All our products meet or exceed the required quality and safety standards for their respective categories. You can view our full list of certifications on our Certificates page."
                },
                {
                  id: 2,
                  question: "Are your masks and PPE appropriate for medical use?",
                  answer: "Yes, our masks and PPE are specifically designed for medical use. Our 3-ply masks meet EN 14683 Type IIR standards with ≥98% bacterial filtration efficiency (BFE), while our N95 respirators are NIOSH-approved with 95% filtration efficiency for airborne particles. All our PPE products undergo rigorous testing to ensure they provide the required protection for healthcare professionals."
                },
                {
                  id: 3,
                  question: "What materials are used in your surgical drapes and gowns?",
                  answer: "Our surgical drapes and gowns are made using high-quality SMS (Spunbond-Meltblown-Spunbond) fabric in various weights (from 30 to 50 gsm). This material provides an effective barrier against fluids and microorganisms while remaining comfortable and breathable. We also offer reinforced options with additional fluid-resistant layers for high-risk procedures."
                }
              ]
            },
            {
              category: "Orders & Shipping",
              questions: [
                {
                  id: 4,
                  question: "What is the minimum order quantity (MOQ) for your products?",
                  answer: "Our minimum order quantities vary by product type. For standard items like masks and gloves, our MOQs typically start at 10,000 units. For specialized items like surgical drapes or coveralls, MOQs may start at 1,000 units. For bulk orders or customized products, please contact our sales team for specific MOQ information."
                },
                {
                  id: 5,
                  question: "How long does shipping take and which countries do you deliver to?",
                  answer: "We ship worldwide to over 80 countries. Standard shipping times vary by destination: 7-10 business days for Europe, 10-15 days for North America and Middle East, and 15-20 days for other regions. Express shipping options are available for urgent orders. We handle all export documentation and can recommend shipping partners for specific regions."
                },
                {
                  id: 6,
                  question: "Do you offer customized packaging or private labeling?",
                  answer: "Yes, we offer customized packaging and private labeling services for bulk orders. This includes custom boxes, packaging inserts, and product labeling with your brand logo and information. Custom packaging requires a minimum order quantity and additional lead time, typically 2-3 weeks beyond standard production times."
                }
              ]
            },
            {
              category: "Product Usage & Safety",
              questions: [
                {
                  id: 7,
                  question: "What is the shelf life of your medical supplies?",
                  answer: "The shelf life varies by product type. Masks, gloves, and other disposable items typically have a 3-year shelf life when stored properly in original packaging at room temperature in dry conditions. Sterile products like surgical drapes have a shelf life of 5 years when the packaging remains intact. Each product package is clearly marked with manufacturing and expiration dates."
                },
                {
                  id: 8,
                  question: "Are your products latex-free?",
                  answer: "Yes, all our medical supplies including gloves, masks, and other PPE are 100% latex-free to prevent allergic reactions. Our nitrile examination gloves are specifically designed to provide the same elasticity and comfort as latex while being suitable for individuals with latex allergies."
                },
                {
                  id: 9,
                  question: "How should I dispose of used medical supplies?",
                  answer: "Used medical supplies should be disposed of according to local regulations for medical waste. Our biodegradable waste disposal bags are specifically designed for the safe containment of used medical supplies. For items potentially contaminated with infectious materials, we recommend following your facility's protocols for biohazardous waste management."
                }
              ]
            },
            {
              category: "Technical Specifications",
              questions: [
                {
                  id: 10,
                  question: "What are the filtration specifications of your N95 respirators?",
                  answer: "Our N95 respirators provide at least 95% filtration efficiency against non-oil-based particles and aerosols as small as 0.3 microns. They meet NIOSH 42 CFR 84 standards and feature a secure fit with adjustable nose bridges and elastic head straps. Each batch undergoes testing for filtration efficiency, breathing resistance, and fit performance."
                },
                {
                  id: 11,
                  question: "What is the fluid resistance level of your surgical gowns?",
                  answer: "Our surgical gowns are available in multiple AAMI levels: Level 1 (minimal fluid resistance), Level 2 (low fluid resistance), Level 3 (moderate fluid resistance), and Level 4 (high fluid resistance). The Level 4 gowns provide protection against penetration by blood and body fluids under pressure and are suitable for long, fluid-intensive procedures."
                },
                {
                  id: 12,
                  question: "Are your biodegradable waste bags suitable for autoclaving?",
                  answer: "Our standard biodegradable waste bags are not autoclave-safe as they have a melting point of approximately 90°C. However, we do offer specialized autoclave-safe waste bags made from high-temperature resistant biodegradable materials that can withstand temperatures up to 135°C, suitable for steam sterilization processes."
                }
              ]
            }
          ]
        };
    }
  }, [selectedCountry]);

  // State to track which questions are expanded
  const [expandedQuestions, setExpandedQuestions] = useState<Record<number, boolean>>({});

  // Toggle question expansion
  const toggleQuestion = (id: number) => {
    setExpandedQuestions(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const content = getLocalizedContent;

  return (
    <>
      <Header />
      
      <div className="pt-[90px] min-h-screen bg-gradient-to-b from-[#061D33] via-[#082F4F] to-[#061D33]">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Hero section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-[#78d6f5] bg-clip-text text-transparent mb-6 leading-tight tracking-tight"
            >
              {content.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[#78d6f5] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
            >
              {content.subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#1E619E] to-[#16DBBE] mx-auto mt-8"
            />
          </div>

          {/* FAQ Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {content.faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                className="bg-gradient-to-br from-[#0A2A45]/80 to-[#061D33]/90 backdrop-blur-sm border border-[#1E619E]/30 rounded-xl overflow-hidden"
              >
                <div className="p-6 border-b border-[#1E619E]/30">
                  <h2 className="text-xl md:text-2xl font-bold text-white flex items-center tracking-tight">
                    <span className="mr-3 flex-shrink-0 w-8 h-8 rounded-full bg-[#16DBBE]/20 flex items-center justify-center">
                      {categoryIndex === 0 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {categoryIndex === 1 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                      )}
                      {categoryIndex === 2 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {categoryIndex === 3 && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#16DBBE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      )}
                    </span>
                    {category.category}
                  </h2>
                </div>

                <div className="divide-y divide-[#1E619E]/20">
                  {category.questions.map((item) => (
                    <div key={item.id} className="p-6">
                      <button 
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full flex justify-between items-start text-left group"
                      >
                        <h3 className="text-white font-semibold pr-6 group-hover:text-[#16DBBE] transition-colors duration-300 text-base md:text-lg leading-relaxed">
                          {item.question}
                        </h3>
                        <div className={`mt-1 transition-transform duration-300 text-[#16DBBE] flex-shrink-0 ${expandedQuestions[item.id] ? 'rotate-180' : ''}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>
                      {expandedQuestions[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 text-gray-300 text-sm md:text-base leading-relaxed"
                        >
                          <p className="font-normal">{item.answer}</p>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-r from-[#082A45] to-[#0A3D62] rounded-2xl p-8 md:p-12 shadow-lg border border-[#1E619E]/30 mb-16"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
                  {content.ctaTitle}
                </h2>
                <p className="text-gray-300 mb-6 md:mb-0 max-w-xl text-base md:text-lg leading-relaxed font-normal">
                  {content.ctaSubtitle}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 whitespace-nowrap">
                <button className="px-6 py-3 bg-[#16DBBE] hover:bg-[#14c5ac] text-[#082A45] font-bold rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {content.emailSupport}
                </button>
                <button className="px-6 py-3 bg-[#1E619E]/30 hover:bg-[#1E619E]/50 text-[#78d6f5] font-bold rounded-lg border border-[#1E619E]/50 transition-colors duration-300 flex items-center justify-center gap-2 text-sm md:text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  {content.liveChat}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}