import { useRouter } from "next/router";
import Link from 'next/link';

export default function about(props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const { id } = router.query;
  // console.log(router, "routes");
  console.log(id);


  return (
    <>     
    <Link href="/">  home </Link>
  <h2> single Blog 1 </h2>
  </>
  )
}
 