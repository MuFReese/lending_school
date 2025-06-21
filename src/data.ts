
interface Nav {
  title: string
  nav: string[]
}

export const nav:Nav = {
  title: 'Brandname',
  nav: ['Home', 'Product', 'Pricing', 'Contact'],
}

interface HeaderContent {
  welcomeTitle: string
  title: string
  text: string
}

export const headerContent: HeaderContent = {
  welcomeTitle: 'For Better Future',
  title: 'HIGH QUALITY COURSES',
  text: 'Find the right instructor for you from over 10,000 teachers'
}