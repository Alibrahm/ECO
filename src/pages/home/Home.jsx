// import './home.scss'
import Widget from '../../components/widget/Widget'
import Datatable from '../../components/datatable/Datatable'
import { Header } from '../../components';

import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page ,Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

function Home() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header  title="Summary" />

       {/* <Sidebar /> */}
       <div className="homeContainer">


        {/* <Topbar/> */}
        <div className="widgets">
          <Widget />
          <Widget />
          <Widget />
        </div>
        {/* <div className="listContainer"> */}
          <Datatable/>
        {/* </div> */}

      </div>
    </div>
  )
}

export default Home



