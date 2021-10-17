import SideBar from "./Sidebar/SideBar";

const ServerLayout = ({ children }: any) => {
  return (
    <div className="container display-f dashboard">
      <div className="col-6-sm col-4-md col-3-lg pr-1">
        <SideBar />
      </div>
      <div className="col-8-xs col-8-sm col-9-md col-9-lg ml-1">{children}</div>
    </div>
  );
};

export default ServerLayout;
