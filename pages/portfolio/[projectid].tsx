import { useRouter } from 'next/router';

const ProjectPage = () => {
  const router = useRouter().query;
  return <div>
    <h1>The Project Page - {router.projectid}</h1>
  </div>;
};
export default ProjectPage;