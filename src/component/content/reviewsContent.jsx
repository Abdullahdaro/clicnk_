import blackwoman from '../../assets/blackwoman.png'
import maingirl from '../../assets/maingirl.png'
import girlwithsmile from '../../assets/girlwithsmile.png'
import oldman from '../../assets/oldman.png'
import irangirl from '../../assets/irangirl.png'
import usa from '../../assets/usa.png'
import iran from '../../assets/iran.png'
import algeria from '../../assets/algeria.png'
import uk from '../../assets/uk.png'
import turkey from '../../assets/turkey.png'
import turkeyflag from '../../assets/turkeyflag.png'

const reviews = {
    en: [
        {
            name: 'Elif S...',
            treatment: 'Q Hollywood Smile',
            way: 'Zirconia Crowns',
            review: '‘‘The process was easier, quicker and better than I expected‘‘',   
            image: maingirl,
            video: 'https://www.youtube.com/embed/jp5Aa39msxs',
            flag: uk,
            country: 'United Kingdom',
            hastag: '#Happiness '
        },
        { 
          name: 'Pernaz S.',
          treatment: 'Q Hollywood Smile',
          way: 'E-Max Laminate Veneers',
          review: '‘‘After I had Laminate Veneers done, it contributed my modeling a lot, which is my profession‘‘',
          image: irangirl,
          video: "https://www.youtube.com/embed/6S_pvA7uYDs?si=O1Yy_Oshyvj4x_Wd" ,
          flag: iran,
          country: 'IRAN',
          hastag: '#Celebrity'
        },
        {
          name: 'Haifa M.     ',
          treatment: 'Q Hollywood Smile',
          way: 'E-Max Zirconia Crowns',
          review: '‘‘They kept in touch with me throughout the whole time to be sure I was fine after all the procedures’’      ',
          image: girlwithsmile,
          video: 'https://www.youtube.com/embed/kk3xdM4EMZg',
          flag: usa,
          country: 'USA',
          hastag: '#Satisfaction'
      },
      {
        name: 'Erkan C.',
        treatment: 'All-On-4/6 Dental Implant',
        way: '',
        review: '‘‘‘I was unhappy with my appearance, I had forgotten to laugh. Now I realize that I can laugh, lucky me.’’’',
        image: turkey,
        video: 'https://www.youtube.com/embed/wfoHP7_KB-g?si=_X7Pg1hlfb6p7TZh',
        flag: turkeyflag,
        country: 'TURKEY',
        hastag: '#Self-Confidence'
      },
      {   
        name: 'Abdulaziz T.',
        treatment: 'All-On-4/6 Dental Implant',
        way: '',
        review: '‘‘Special Thanks for warm welcome and the full support that was reserved for me.’’',
        image: oldman,
        video: 'https://youtube.com/embed/EdPgH7Tb9jQ?si=ILfadM26nXrJB62F',
        flag: algeria,
        country: 'ALGERiA',
        hastag: '#Comfort'
      },
      {
        name: 'Latoya W.',
        treatment: 'ALL-ON-4/6 Dental Implant',
        way: '',
        review: '‘‘I received a quality smile, you have changed my life’’',
        image: blackwoman,
        video: 'https://youtube.com/embed/2GrfqEOMRVc?si=F9AhXm7AZWuXqz9I',
        flag: usa,
        country: 'USA',
        hastag: '#HappyTears'
      }
    ],

    tr: [
        {
            name: 'Elif S...',
            treatment: 'Q Hollywood Smile',
            way: 'Zirkonyum Kuron',
            review: '‘‘Süreç beklentimin çok daha kolay, hızlı ve iyi geçti‘‘',
            image: maingirl,
            video: 'https://www.youtube.com/embed/jp5Aa39msxs',
            flag: uk,
            country: '	BİRLEŞİK KRALLIK',
            hastag: '#Mutluluk'
        },
        {
            name: 'Pernaz S.',
            treatment: 'Q Hollywood Smile',
            way: 'E-Max Lamina Veneer',
            review: '‘‘Lamina Veneer yaptırdıktan sonra modellik kariyerime çok katkı sağladı ve etkiledi.‘‘',
            image: irangirl,
            video: 'https://www.youtube.com/embed/ItD6nMZRbCU',
            flag: iran,
            country: 'İRAN',
            hastag: '#Şöhret'
        },
        {
            name: 'Haifa M.     ',
            treatment: 'Q Hollywood Smile',
            way: 'E-Max Zirkonyum Kuron',
            review: '‘‘Tüm işlemlerden sonra iyi olduğumdan emin olmak için tüm süreç boyunca benimle iletişim halinde oldular.’’',
            image: girlwithsmile,
            video: 'https://www.youtube.com/embed/3_wfxgNsuJ8?si=uzlu-tpoB5V0ys17',
            flag: usa,
            country: 'ABD',
            hastag: '#Memnuniyet'
        },
        {
            name: 'Erkan C.',
            treatment: 'All-On-4/6 Dental İmplant',
            way: '',
            review: '‘‘Tedaviye başlamadan önce gülmeyi unutmuştum, şimdi anlıyorum ki artık gülebiliyormuşum, ne mutlu bana’’',
            image: turkey,
            video: 'https://www.youtube.com/embed/4yiGZyX21h4?si=Cn3rQAnxT_2Crm34',
            flag: turkeyflag,
            country: 'TÜRKİYE',
            hastag: '#Özgüven'
        },
        {
            name: 'Abdulaziz T.',
            treatment: 'All-On-4/6 Dental Implant',
            way: '',
            review: '‘‘Sıcak karşılama ve bana ayrılan tüm destek ve imkanlar için özel teşekkür ederim.’’',
            image: oldman,
            video: 'https://youtube.com/embed/EdPgH7Tb9jQ?si=ILfadM26nXrJB62F',
            flag: algeria,
            country: 'CEZAYİR',
            hastag: '#Konfor'
        },
        {
            name: 'Latoya W.',
            treatment: 'ALL-ON-4/6 Dental Implant',
            way: '',
            review: '‘‘Kaliteli bir gülüşe sahip oldum, hayatımı değiştirdiniz.’’',
            image: blackwoman,
            video: 'https://youtube.com/embed/2GrfqEOMRVc?si=F9AhXm7AZWuXqz9I',
            flag: usa,
            country: 'ABD',
            hastag: '#SevinçGözyaşları'
        },
    ],

    fr: [
        {
            name: 'Elif S...',
            treatment: 'Q Sourire Hollywoodien',
            way: 'Couronnes en Zirconium',
            review: '‘‘Le processus a été plus facile, plus rapide et meilleur que je ne lespérais.‘‘',
            image: maingirl,
            video: 'https://www.youtube.com/embed/jp5Aa39msxs',
            flag: uk,
            country: 'kingtom unis',
            hastag: '#Bonheur'
        },
        {
            name: 'Pernaz S.',
            treatment: 'Q Sourire Hollywoodien',
            way: 'Placages en Stratifié E-Max',
            review: 
            '‘‘Après avoir fait poser des facettes en stratifié, jai beaucoup appris à modeler, ce qui est ma profession.‘‘',
            image: irangirl,
            video: "https://www.youtube.com/embed/6S_pvA7uYDs?si=O1Yy_Oshyvj4x_Wd" ,
            flag: iran,
            country: 'IRAN',
            hastag: '#Célébrité'
        },
        {
            name: 'Haifa M.     ',
            treatment: 'Q Hollywood Smile',
            way: 'Couronnes en Zircone E-Max',
            review: '‘‘Ils sont restés en contact avec moi pendant toute la durée de lopération pour sassurer que jallais bien après toutes les procédures.’’',
            image: girlwithsmile,
            video: 'https://www.youtube.com/embed/kk3xdM4EMZg',
            flag: usa,
            country: 'Aux Etats-Unis',
            hastag: '#Satisfaction'
        },
        {
            name: 'Erkan C.',
            treatment: 'All-On-4/6 Dental Implant',
            way: '',
            review: '‘‘Jétais mécontent de mon apparence, javais oublié de rire. Maintenant je me rends compte que je peux rire, jai de la chance.’’',
            image: turkey,
            video: 'https://www.youtube.com/embed/wfoHP7_KB-g?si=_X7Pg1hlfb6p7TZh',
            flag: turkeyflag,
            country: 'La Turqie',
            hastag: '#Confiance en Soi'
        },
        {
            name: 'Abdulaziz T.',
            treatment: 'All-On-4/6 Dental Implant',
            way: '',
            review: '‘‘Remerciements particuliers pour laccueil chaleureux et le soutien total qui mont été réservés.’’',
            image: oldman,
            video: 'https://youtube.com/embed/EdPgH7Tb9jQ?si=ILfadM26nXrJB62F',
            flag: algeria,
            country: 'ALGÉRIE',
            hastag: '#Confort'
        },
        {
            name: 'Latoya W.',
            treatment: 'ALL-ON-4/6 Dental Implant',
            way: '',
            review: '‘‘J’ai eu un beau sourire, vous avez changé ma vie’’',
            image: blackwoman,
            video: 'https://youtube.com/embed/2GrfqEOMRVc?si=F9AhXm7AZWuXqz9I',
            flag: usa,
            country: 'Aux Etats-Unis',
            hastag: '#Larmes de Bonheur'
        },
    ],
}

export default reviews;