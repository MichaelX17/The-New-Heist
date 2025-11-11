import React from 'react'
import { motion } from 'framer-motion'

// 🎌 Sistema de internacionalización para el artículo
const articleTranslations = {
  en: {
    title: "GTA 6 — What We Know",
    description: "A concise and stylized summary of the game's public details, its aesthetics and expectations.",
    paragraph1: "Rockstar Games has delayed the launch of Grand Theft Auto VI until <strong>November 19, 2026</strong> to 'polish the game to the maximum' and ensure it meets the high level of perfection that players expect.",
    paragraph2: "The game will take us to a <strong>completely revamped Vice City</strong> within the state of Leonida, with a map that is rumored to be <strong>twice as large as that of GTA V</strong>. It will include locations such as Ocean Beach, Little Cuba and various national parks.",
    blockquote: "This additional time is a proof of Rockstar's commitment to quality, ensuring an unparalleled entertainment experience from day one.",
    paragraph3: "The confirmed protagonists will be <strong>Lucía and Jason</strong>, in a vast and detailed world. Instead of seeing the delay as negative, it should be celebrated as a guarantee that Rockstar is dedicating all necessary resources to make GTA VI set a new standard in the industry.",
    update: "Last update: November 2026"
  },
  es: {
    title: "GTA 6 — Lo que sabemos",
    description: "Un resumen conciso y estilizado sobre los detalles públicos del juego, su estética y expectativas.",
    paragraph1: "Rockstar Games ha retrasado el lanzamiento de Grand Theft Auto VI hasta el <strong>19 de noviembre de 2026</strong> para 'pulir el juego al máximo' y garantizar que cumpla con el alto nivel de perfección que los jugadores esperan.",
    paragraph2: "El juego nos llevará a una <strong>Vice City completamente renovada</strong> dentro del estado de Leonida, con un mapa que se rumorea será <strong>el doble de grande que el de GTA V</strong>. Contará con ubicaciones como Ocean Beach, Little Cuba y diversos parques nacionales.",
    blockquote: "Este tiempo adicional es una prueba del compromiso de Rockstar con la calidad, asegurando una experiencia de entretenimiento sin igual desde el primer día.",
    paragraph3: "Los protagonistas confirmados serán <strong>Lucía y Jason</strong>, en un mundo vasto y detallado. En lugar de ver el retraso como negativo, debería celebrarse como una garantía de que Rockstar está dedicando todos los recursos necesarios para que GTA VI establezca un nuevo estándar en la industria.",
    update: "Última actualización: Noviembre 2026"
  },
  fr: {
    title: "GTA 6 — Ce que nous savons",
    description: "Un résumé concis et stylisé des détails publics du jeu, de son esthétique et des attentes.",
    paragraph1: "Rockstar Games a repoussé le lancement de Grand Theft Auto VI au <strong>19 novembre 2026</strong> pour 'polir le jeu au maximum' et s'assurer qu'il réponde au haut niveau de perfection que les joueurs attendent.",
    paragraph2: "Le jeu nous emmènera dans un <strong>Vice City complètement remodelé</strong> dans l'état de Leonida, avec une carte qui serait <strong>deux fois plus grande que celle de GTA V</strong>. Il inclura des lieux tels que Ocean Beach, Little Cuba et divers parcs nationaux.",
    blockquote: "Ce temps supplémentaire est une preuve de l'engagement de Rockstar envers la qualité, garantissant une expérience de divertissement inégalée dès le premier jour.",
    paragraph3: "Les protagonistes confirmés seront <strong>Lucía et Jason</strong>, dans un monde vaste et détaillé. Au lieu de voir le retard comme négatif, il devrait être célébré comme une garantie que Rockstar consacre toutes les ressources nécessaires pour que GTA VI établisse une nouvelle norme dans l'industrie.",
    update: "Dernière mise à jour : Novembre 2026"
  },
  de: {
    title: "GTA 6 — Was wir wissen",
    description: "Eine prägnante und stilisierte Zusammenfassung der öffentlichen Details des Spiels, seiner Ästhetik und Erwartungen.",
    paragraph1: "Rockstar Games hat den Start von Grand Theft Auto VI auf den <strong>19. November 2026</strong> verschoben, um 'das Spiel auf das Maximum zu polieren' und sicherzustellen, dass es das hohe Perfektionsniveau erfüllt, das die Spieler erwarten.",
    paragraph2: "Das Spiel führt uns in ein <strong>komplett erneuertes Vice City</strong> im Staat Leonida, mit einer Karte, die <strong>doppelt so groß wie die von GTA V</strong> sein soll. Es wird Orte wie Ocean Beach, Little Cuba und verschiedene Nationalparks umfassen.",
    blockquote: "Diese zusätzliche Zeit ist ein Beweis für Rockstars Engagement für Qualität und sichert ein unvergleichliches Unterhaltungserlebnis ab dem ersten Tag.",
    paragraph3: "Die bestätigten Protagonisten sind <strong>Lucía und Jason</strong> in einer weitläufigen und detaillierten Welt. Anstatt die Verzögerung als negativ zu sehen, sollte sie als Garantie gefeiert werden, dass Rockstar alle notwendigen Ressourcen einsetzt, damit GTA VI einen neuen Maßstab in der Branche setzt.",
    update: "Letzte Aktualisierung: November 2026"
  },
  it: {
    title: "GTA 6 — Cosa sappiamo",
    description: "Un riassunto conciso e stilizzato dei dettagli pubblici del gioco, della sua estetica e delle aspettative.",
    paragraph1: "Rockstar Games ha posticipato il lancio di Grand Theft Auto VI al <strong>19 novembre 2026</strong> per 'lucidare il gioco al massimo' e garantire che soddisfi l'alto livello di perfezione che i giocatori si aspettano.",
    paragraph2: "Il gioco ci porterà in una <strong>Vice City completamente rinnovata</strong> nello stato di Leonida, con una mappa che si dice sarà <strong>due volte più grande di quella di GTA V</strong>. Include località come Ocean Beach, Little Cuba e vari parchi nazionali.",
    blockquote: "Questo tempo aggiuntivo è una prova dell'impegno di Rockstar per la qualità, garantendo un'esperienza di intrattenimento senza pari dal primo giorno.",
    paragraph3: "I protagonisti confermati saranno <strong>Lucía e Jason</strong>, in un mondo vasto e dettagliato. Invece di vedere il ritardo come negativo, dovrebbe essere celebrato come una garanzia che Rockstar sta dedicando tutte le risorse necessarie per far sì che GTA VI stabilisca un nuovo standard nel settore.",
    update: "Ultimo aggiornamento: Novembre 2026"
  },
  pt: {
    title: "GTA 6 — O que sabemos",
    description: "Um resumo conciso e estilizado dos detalhes públicos do jogo, sua estética e expectativas.",
    paragraph1: "A Rockstar Games adiou o lançamento de Grand Theft Auto VI até <strong>19 de novembro de 2026</strong> para 'polir o jogo ao máximo' e garantir que ele atenda ao alto nível de perfeição que os jogadores esperam.",
    paragraph2: "O jogo nos levará a uma <strong>Vice City completamente reformulada</strong> no estado de Leonida, com um mapa que rumora ser <strong>duas vezes maior que o de GTA V</strong>. Incluirá locais como Ocean Beach, Little Cuba e vários parques nacionais.",
    blockquote: "Este tempo adicional é uma prova do compromisso da Rockstar com a qualidade, garantindo uma experiência de entretenimento incomparável desde o primeiro dia.",
    paragraph3: "Os protagonistas confirmados serão <strong>Lucía e Jason</strong>, em um mundo vasto e detalhado. Em vez de ver o atraso como negativo, deve ser celebrado como uma garantia de que a Rockstar está dedicando todos os recursos necessários para que GTA VI estabeleça um novo padrão na indústria.",
    update: "Última atualização: Novembro 2026"
  }
};

// 🎯 Función para detectar el idioma del usuario
type SupportedLang = keyof typeof articleTranslations;

function getUserLanguage(): SupportedLang {
  if (typeof window === 'undefined') return 'en';

  const browserLang = (typeof navigator !== 'undefined' ? navigator.language : 'en') || 'en';
  const primaryLang = browserLang.split('-')[0];

  return (primaryLang in articleTranslations) ? (primaryLang as SupportedLang) : 'en';
}

export default function ArticleSection() {
  const lang = getUserLanguage();
  const t = articleTranslations[lang];

  return (
    <motion.section
      className="py-24 px-6 sm:px-12 lg:px-24 bg-gradient-to-b from-black/0 to-black/60"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-4xl mx-auto glass-pink rounded-3xl p-10 shadow-soft-neon">
        <header className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold neon-text">{t.title}</h2>
          <p className="mt-2 text-sm text-white/70">{t.description}</p>
        </header>

        <article className="space-y-4 text-white/90 leading-7 text-base">
          <p dangerouslySetInnerHTML={{ __html: t.paragraph1 }} />

          <p dangerouslySetInnerHTML={{ __html: t.paragraph2 }} />

          <blockquote className="border-l-4 border-neonPink pl-4 italic text-white/85">
            {t.blockquote}
          </blockquote>

          <p dangerouslySetInnerHTML={{ __html: t.paragraph3 }} />

          <footer className="mt-6 text-sm text-white/70">
            {t.update}
          </footer>
        </article>
      </div>
    </motion.section>
  )
}