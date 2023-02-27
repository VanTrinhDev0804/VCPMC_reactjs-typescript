import { Layout } from "antd";
import React from "react";
import { useParams } from "react-router-dom";
import SiderMenu from "../../components/common/Menu/SiderMenu";
import ContentPageBaoCaoDT from "../../layout/ContentLayout/ContentBaoCaoDT";
import ContentPageLichsuDoiSoat from "../../layout/ContentLayout/ContentLichsuDoiSoat";
import ChiTietLichSuDoiSoat from "../../layout/ContentLayout/ContentLichsuDoiSoat/ChiTietLichSuDoiSoat";
import ContentPageKhoBG from "../../layout/ContentLayout/ContentPageKhoBG";
import ContentPagePhanPhoiDT from "../../layout/ContentLayout/ContentPhanPhoiDT";
import ChiTietPPDoanhThu from "../../layout/ContentLayout/ContentPhanPhoiDT/ChiTietPPDoanhThu";
import LayoutHeader from "../../layout/Header/LayoutHeader";
import { IParams } from "../../types";

const BCDoanhThuPages = () => {
  const { page, control, tag, id }: IParams = useParams();

  const { Content } = Layout;

  const showContent = () => {
    switch (`${tag}`) {
      case "chitiet-doanhThu":
        return <ChiTietPPDoanhThu />;

        case "chitiet-doisoatdt":
          return <ChiTietLichSuDoiSoat />;
      default:
        switch (`${control}`) {
          case "phanphoidt":
            return <ContentPagePhanPhoiDT />;
          case "lichsu-doisoat":
            return <ContentPageLichsuDoiSoat />;

          case "baocaodt":
            return <ContentPageBaoCaoDT />;

          default:
            break;
        }
        break;
    }
  };
  return (
    <div className="MainApp">
      <Layout>
        <SiderMenu />
        <Layout>
          <LayoutHeader />
          <Content>{showContent()}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BCDoanhThuPages;
