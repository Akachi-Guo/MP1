
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
        school: 'Northeastern University',
        major: 'Bioengineering',
      logo: 'college',
      start: '2024',
      end: 'Present'
    },
    {
      school: 'Tianxing Genesis School',
      major: 'Basic Education',
      logo: 'coffee',
      start: '2012',
      end: '2024'
    },
  ]