// career
export type CareerItemType = {
    company: string
    title: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
export const careerList: Array<CareerItemType> = [
    {
      company: 'Shanghai Soong Ching Ling School',
      title: 'Computer Science Teacher',
      logo: 'college',
      start: '2020',
      end: 'Present'
    },
    {
      company: 'Bigo Live',
      title: 'US Operations',
      logo: 'coffee',
      start: '2018',
      end: '2020'
    }
  ]