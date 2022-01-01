
const backendPortfolio = [
     {
          id: 1,
          title: 'Node.js',
          img: 'data:image/png;base64,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'
     },
     {
          id: 2,
          title: 'Spring Boot',
          img: 'https://pbs.twimg.com/profile_images/1235868806079057921/fTL08u_H_400x400.png'
     },
     {
          id: 3,
          title: 'Django',
          img: 'data:image/png;base64,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'
     }
]

const mobilePortfolio = [
     {
          id: 1,
          title: 'Flutter',
          img: 'https://blog.logrocket.com/wp-content/uploads/2021/03/test-automation-flutter-overview.png'
     },
     {
          id: 2,
          title: 'Kivy',
          img: 'data:image/png;base64,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'
     }
]

const frontendPortfolio = [
     {
          id: 1,
          title: 'React JS',
          img: 'https://www.pngitem.com/pimgs/m/616-6169316_react-react-js-icon-white-hd-png-download.png'
     },
     {
          id: 2,
          title: 'Next JS',
          img: 'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
     },
     {
          id: 3,
          title: 'HTML CSS JS',
          img: 'https://previews.123rf.com/images/vasilyrosca/vasilyrosca2004/vasilyrosca200400117/144227713-html5-css3-js-icon-set-web-development-logo-icon-set-of-html-css-and-javascript-programming-symbol.jpg'
     }
]

const featuredPortfolio = [
     {
          id: 1,
          title: 'MATLAB',
          img: 'https://www.mathworks.com/help/examples/matlab/win64/MatlabLogoExample_08.png'
     },
     {
          id: 2,
          title: 'Java',
          img: 'https://www.kindpng.com/picc/m/198-1984828_java-icon-transparent-hd-png-download.png'
     },
     {
          id: 3,
          title: 'Python',
          img: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/302/913/datas/original.jpg'
     },
     {
          id: 4,
          title: 'C',
          img: 'https://img.favpng.com/10/23/21/c-programming-language-icon-png-favpng-878WK0RF2zxn7b6TimT7zquZN.jpg'
     },
     {
          id: 5,
          title: 'C++',
          img: 'https://w7.pngwing.com/pngs/46/626/png-transparent-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template-blue.png'
     },
     {
          id: 6,
          title: 'Microservices',
          img: 'https://r2m.se/wp-content/uploads/2018/01/microservices-1140x665.png'
     }
]

module.exports = {
     featuredPortfolio: featuredPortfolio,
     mobilePortfolio: mobilePortfolio,
     backendPortfolio: backendPortfolio,
     frontendPortfolio: frontendPortfolio
}