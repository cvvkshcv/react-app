import { TabComponent } from "../../components/TabComponent";
import { FileUploadSection } from "./FileUploadSection";
import { FromUrl } from "./FromUrl";
import { FromYtubeUrl } from "./FromYtubeUrl";

const tabs = {
  "Upload File": <FileUploadSection />,
  "From Url": <FromUrl />,
  "From Youtube": <FromYtubeUrl />,
};

const Dashboard = () => {
  return <TabComponent tabConfig={tabs} />;
};

export default Dashboard;
