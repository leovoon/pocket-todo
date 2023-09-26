import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const PostPage: React.FC<PostPageProps> = ({ slug }) => {
  const router = useRouter();

  console.log(router);
  return <div>Enter {slug}</div>;
};

interface PostPageProps {
  slug: string;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps<
  PostPageProps,
  Params
> = async (ctx) => {
  if (!ctx.params) {
    throw new Error("No params");
  }
  const slug = ctx.params?.slug;

  if (slug === "r") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      slug,
    },
  };
};

export default PostPage;
