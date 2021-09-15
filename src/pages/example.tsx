import { GetServerSideProps } from "next"

type ExampleProps = {
  title: string
}

export default function Example ({ title }: ExampleProps) {
  return (
    <h1>{title}</h1>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: 'Example'
    }
  }
}
