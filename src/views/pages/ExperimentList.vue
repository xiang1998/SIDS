<template>
  <div class="bg-page">
    <div class="font-bold tl ml pt">試験一覧</div>
    <div class="fbox fbox-ac list-title mar20">
      <el-avatar
        :size="80"
        src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
      ></el-avatar>
      <div class="tl ml picimg">
        <p class="font-xxxl mb10">佐藤 太郎</p>
        <p class="font-m">Deity試験データ管理システムへようこそ</p>
      </div>
      <div class="title-num fbox fbox-ac">
        <div class="fbox fbox-col fbox-ac">
          <span class="color-red">35</span>
          <p>試験の数</p>
        </div>
        <div class="fbox fbox-col fbox-ac">
          <span class="color-red">15</span>
          <p>アップロード中のファイル</p>
        </div>
        <div class="fbox fbox-col fbox-ac">
          <span class="color-red">2</span>
          <p>ダウンロード中のファイル</p>
        </div>
      </div>
    </div>
    <el-form ref="form" label-width="80px">
      <div class="mt ml mr no">
        <div class="experiment-btn fbox fbox-ac">
          <div class="fbox fbox-ac">
            <span>試験ID</span>
            <el-input
              class="inputs"
              placeholder="試験IDを入力する"
              clearable
            ></el-input>
          </div>
          <div class="fbox fbox-ac">
            <span>試験名称</span>
            <el-input
              class="inputs"
              placeholder="試験名称を入力する"
              clearable
            ></el-input>
          </div>
          <el-button
            style="background: #c8102e;margin-left:20px"
            class="color-white"
            icon="el-icon-search"
            round
            >検索</el-button
          >
        </div>
      </div>
       
    </el-form>
    <el-table
      :header-cell-style="tableHeaderColor"
      class="tables"
      :data="tableData"
      :stripe="true"
      style="width: 100%"
       :cell-style='setCell'
       @cell-click='setColumn'
    >
      <el-table-column prop="id" label="試験ID" width="300" class="pl"  class-name='column1'>
      </el-table-column>
      <el-table-column prop="name" label="試験名称" width="300">
      </el-table-column>
      <el-table-column prop="group" label="担当グループ"> </el-table-column>
      <el-table-column prop="time" label="登録日付"> </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "ExperimentList",
  data() {
    return {
      dape: { file: "" },
      tableData: [
        {
          id: "1",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1518 弄",
          time: "2016-05-02",
        },
        {
          id: "2",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1517 弄",
          time: "2016-05-02",
        },
        {
          id: "3",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1519 弄",
          time: "2016-05-02",
        },
        {
          id: "4",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1516 弄",
          time: "2016-05-02",
        },
      ],
    };
  },
  computed: {},
  mounted() {},
  methods: {
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      return "background: #F5F5F5 0% 0% no-repeat padding-box;font-size:14px";
    },
    setColumn(row, column, cell, event){
           let path='/pages/ExperiInformation';
           console.log(row,column)
          if(column.className=="column1"){
             this.$router.replace(path);
          }
    },
    setCell({row, column, rowIndex, columnIndex}){
      if(column.className=="column1"){
          
          return "color:rgba(45, 140, 240, 1);cursor: pointer;";
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.list-title {
  padding: 24px 46px;
  background: #ffffff 0% 0% no-repeat padding-box;
  .picimg {
    width: 400px;
    height: 100%;
    border-right: 2px solid #c8102e;
    .font-xxxl {
      margin-bottom: 10px !important;
    }
  }
  .title-num {
    div {
      margin: 0 60px;
      span {
        font-size: 26px;
      }
      &:first-child {
        margin-left: 110px;
      }
    }
  }
}
.experiment-btn {
  border-top: 2px solid #c8102e;
  padding: 10px 30px;
  background: #fff;
  div {
    width: 300px;
    span {
      margin-right: 20px;
    }
    .inputs {
      width: 70%;
      border-radius: 20px;
    }
  }
}
.el-input__inner {
  border-radius: 20px;
}
.el-button:focus,
.el-button:hover {
  color: #fff;
  border-color: #f72043;
}
.tables .el-table th > .cell {
  padding-left: 20px !important;
}
.tables {
  padding: 0 20px 20px;
  background: #f5f6fa;
}
/deep/ .el-table th > .cell,
/deep/ .el-table td,
.el-table th {
  padding-left: 20px;
}
/deep/ .el-input__inner {
  border-radius: 20px;
}
/deep/ .el-input__inner:focus{
	border-color: #f72043;
}
</style>