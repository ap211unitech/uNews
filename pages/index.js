export default function Home() {
  return (
    <>
    </>
  )
}

export async function getServerSideProps({ context }) {
  return {
    redirect: {
      destination: '/news/general',
      permanent: true,
    },
  }
}