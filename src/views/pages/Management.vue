<template>
  <div class="content">
       <div class="title font-bold  no clearfix">
           <p class="fl"><span>ユーザ一覧</span> </p>
           <p class="fr" @click="login">
               <el-button
            style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
            class="color-white "
            round
            >ユーザ情報登録</el-button>
           </p>
         </div>
         <div class="infos">
           <div class="top no tl">
                <div class="fbox fbox-ac">
                    <span>ユーザID</span>
                    <el-input
                    class="inputs"
                    placeholder="ユーザIDを入力する"
                    clearable
                    ></el-input>
                </div>
                 <div class="fbox fbox-ac">
                    <span>ユーザ名</span>
                    <el-input
                    class="inputs"
                    placeholder="ユーザ名を入力する"
                    clearable
                    ></el-input>
                </div>
                 <div class="fbox fbox-ac">
                    <span>担当グループ</span>
                    <el-input
                    class="inputs"
                    placeholder="担当グループを選択してくだだい"
                    clearable
                    ></el-input>
                </div>
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
                    style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
                    class="color-white"
                    icon="el-icon-search"
                    round
                    >検索</el-button
                >
           </div>
            <el-table
                class="tables mb  no"
                :data="tableData"
                :stripe="true"
                style="width: 100%"
                :header-cell-style="tableHeaderColor" 
                @cell-click='setColumn'
                 :cell-style='setCell'
                >
                <el-table-column prop="id" align='center' label="ユーザID"  width="" class="pl" style="" class-name='column1'>
                </el-table-column>
                <el-table-column prop="name" align='center' label="ユーザ名" width="">
                </el-table-column>
                <el-table-column prop="group" align='center' label="権限設定単位"> </el-table-column>
                <el-table-column prop="" align='center' label='担当グループ'></el-table-column>
                <el-table-column prop=""  align='center' label='試験ID'></el-table-column>
                <el-table-column prop="" align='center' label="試験名称"> </el-table-column>
                <el-table-column prop='' align='center' label='参照'>
                    <template>
                      <el-button class="color-red" size="medium" icon='el-icon-success' ></el-button>
                    </template>
                </el-table-column>
                <el-table-column prop='' align='center' label='ダウンロード'>
                   <template>
                      <el-button class="color-gray" size="medium" icon='el-icon-success'></el-button>
                    </template>
                </el-table-column>
                <el-table-column prop='' align='center' label='アップロード'>
                   <template>
                      <el-button class="color-red" size="medium" icon='el-icon-success'  ></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                background
                layout="prev, pager, next,jumper"
                @current-change="handleCurrentChange"
                :current-page="currentPage1"
                :total="100" class="pb">
             </el-pagination>
         </div>
         <drawer :title='title' :dialog='dialog' @cancel='close' :show='show'>

         </drawer>
  </div>
</template>

<script>
import drawer from '../../components/Drawer';
export default {
    components: { drawer },
    name: "Management",
    data(){
      return{
        currentPage1: 1,
        dialog: false,
        title:'ユーザ情報編集',
        show:true,
        tableData: [
        {
          id: "1",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1518 弄",
          start:'',
          end:'',
          time: "2016-05-02",
          classify:'',
          state:'',
          process:''
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
      }
    },
    methods:{
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            return "background: #F5F5F5 0% 0% no-repeat padding-box;font-size:14px";
        },
         handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
       },
       goTo(path) {
           this.$router.replace(path);
       },
       setColumn(row, column, cell, event){
          if(column.className=="column1"){
             this.dialog=true;
              this.title='ユーザ情報編集';
              this.show=true;
          }
       },
       setCell({row, column, rowIndex, columnIndex}){
          if(column.className=="column1"){
              return "color:rgba(45, 140, 240, 1);cursor: pointer;";
          }
       },
       close(){
         this.dialog=false;
       },
       login(){
         this.dialog=true;
         this.title='ユーザ情報登録';
         this.show=false;
       }
    }
}
</script>

<style lang="scss" scoped>
   .content{
       padding:32px 20px;
       .title{
           p{display: inline-block;}
       }
       .infos{
           .top{
               width: 96%;overflow: hidden;
               background: #fff;padding:10px 30px;border-top:3px solid rgba(200, 16, 46, 1);
               div{
                   width:17%;display: inline-block;
                   span{
                       margin-right:10px;
                   }
                   .inputs{
                       width: 156px;
                   }
               }
           }
       }
   }
   .el-button:focus,
   .el-button:hover {
    color: #fff;
    border-color: #f72043;
    }
    .no .el-button{
      background: none;
    }
</style>