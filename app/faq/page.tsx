"use client";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import Header from "../components/Header";
import TransparentNavbar from "../components/TransparentNavbar";
import Footer from "../components/sections/Footer";
import { useCountryStore } from "../../lib/store";
import Image from "next/image";

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
      <div className="mt-2">
        <TransparentNavbar />
      </div>
      
      {/* Professional Medical-Grade FAQ Design */}
      <div className="pt-[0px] min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          
          {/* Professional Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-[#0F4679]/5 rounded-full border border-[#0F4679]/10 mb-6">
              <svg className="w-4 h-4 text-[#0F4679] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-[#0F4679] tracking-wide">MEDICAL SUPPORT CENTER</span>
            </div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-inter leading-tight"
            >
              Frequently Asked Questions
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal"
            >
              Expert answers to common questions about our ISO-certified medical supplies, 
              ordering processes, and technical specifications
            </motion.p>
            
            {/* Professional Divider */}
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-0.5 bg-gradient-to-r from-[#0F4679] to-[#158C07] mx-auto mt-8"
            />
          </div>

          {/* Professional FAQ Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {content.faqData.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Professional Category Header */}
                <div className="px-8 py-6 border-b border-gray-50 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F4679] to-[#158C07] flex items-center justify-center mr-4 shadow-sm">
                      {categoryIndex === 0 && (
                        <svg className="w-6 h-6 text-white" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                          <path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" />
                        </svg>
                      )}
                      {categoryIndex === 1 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                      )}
                      {categoryIndex === 2 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      )}
                      {categoryIndex === 3 && (
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900 font-inter">
                        {category.category}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {category.questions.length} questions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional FAQ Items */}
                <div className="divide-y divide-gray-50">
                  {category.questions.map((item, index) => (
                    <div key={item.id} className="group">
                      <button 
                        onClick={() => toggleQuestion(item.id)}
                        className="w-full px-8 py-6 text-left hover:bg-gray-25 transition-colors duration-200"
                      >
                        <div className="flex justify-between items-start">
                          <h3 className="text-base font-semibold text-gray-900 pr-6 group-hover:text-[#0F4679] transition-colors duration-200 leading-relaxed font-inter">
                            {item.question}
                          </h3>
                          <div className={`flex-shrink-0 transition-transform duration-300 ${expandedQuestions[item.id] ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5 text-gray-400 group-hover:text-[#0F4679]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      {expandedQuestions[item.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="px-8 pb-6"
                        >
                          <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#0F4679]">
                            <p className="text-gray-700 leading-relaxed font-normal text-sm">
                              {item.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Professional CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-[#0F4679] to-[#158C07] rounded-3xl p-12 text-center shadow-2xl"
          >
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full border border-white/20 mb-6">
                <svg className="w-4 h-4 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75c0-.622-.056-1.235-.166-1.825a.75.75 0 00-.668-.58H12z" />
                </svg>
                <span className="text-sm font-semibold text-white tracking-wide">EXPERT SUPPORT</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-inter">
                Need Specialized Assistance?
              </h2>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                Our medical supply specialists are available to provide detailed technical guidance, 
                custom solutions, and regulatory compliance support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-white text-[#0F4679] font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Technical Support
                </button>
                
                <button className="px-8 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Schedule Consultation
                </button>
              </div>
              
              {/* Professional Contact Info */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="font-medium">+91 98200 43274</span>
                </div>
                
                <div className="flex items-center text-white/90">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">24/7 Support Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}