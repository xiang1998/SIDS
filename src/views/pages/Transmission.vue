<template>
    <div class="content">
     <div class="title font-bold tl">試験データ転送状況一覧</div>
     <div class="info mt">
         <div class="top no">
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
          <div class="fbox fbox-ac select">
            <span>開始日付</span>
            <el-select v-model="value" placeholder="请选择" class="inputs">
                
            </el-select>
          </div>
         <div class="fbox fbox-ac select">
            <span>転送区分</span>
             <el-select v-model="value" placeholder="選択してください" class="inputs">
                
            </el-select>
          </div>
          <div class="fbox fbox-ac select">
            <span>ステータス</span>
             <el-select v-model="value" placeholder="選択してください" class="inputs">
                
            </el-select>
          </div>
          <el-button
            style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;"
            class="color-white"
            icon="el-icon-search"
            round
            >検索</el-button
          >
         </div>
          <el-table
      class="tables mb no"
      :data="tableData"
      :stripe="true"
      style="width: 100%"
      :header-cell-style="tableHeaderColor" 
      @cell-click='setColumn'
      :cell-style='setCell'
    >
      <el-table-column prop="id" align='left' label="試験ID"   width="" class="pl" class-name='column1'>
      </el-table-column>
      <el-table-column prop="name" align='left' label="試験名称" width="">
      </el-table-column>
      <el-table-column prop="group" align='center' label="担当グループ"> </el-table-column>
      <el-table-column prop="start" align='center' label='転送元'></el-table-column>
      <el-table-column prop="end"  align='center' label='転送先'></el-table-column>
      <el-table-column prop="time" align='center' label="開始日付"> </el-table-column>
      <el-table-column prop='classify' align='center' label='転送区分'></el-table-column>
      <el-table-column prop='state' align='center' label='ステータス' class-name='state'></el-table-column>
      <el-table-column prop='process' align='center' label='進捗'>
          <el-progress :percentage="percentage" :color="customColors"></el-progress>
      </el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next,jumper"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :total="50" class="pb">
        </el-pagination>
    </div>
 </div>
     
</template>

<script>
export default {
    name: "Transmission",
    data(){
      return{
        currentPage1: 1,
        value:'',
        tableData: [
        {
          id: "1",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1518 弄",
          start:'',
          end:'',
          time: "2016-05-02",
          classify:'',
          state:'中止',
          stateCode:0,
          process:''
        },
        {
          id: "2",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1517 弄",
          time: "2016-05-02",
           state:'完了',
          stateCode:1,
        },
        {
          id: "3",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1519 弄",
          time: "2016-05-02",
           state:'进行中',
          stateCode:2,
        },
        {
          id: "4",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1516 弄",
          time: "2016-05-02",
        },
      ],
       percentage: 40,
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      }
    },
    methods:{
        tableHeaderColor({ row, column, rowIndex, columnIndex }) {
            return "background: #F5F5F5 0% 0% no-repeat padding-box;font-size:14px";
        },
         handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
       },
       setColumn(row, column, cell, event){
           let path='/pages/TransInfomation';
          if(column.className=="column1"){
           // return 'color:rgba(45, 140, 240, 1)'
             this.$router.replace(path);
          }
       },
       
       setCell({row, column, rowIndex, columnIndex}){
         if(row.stateCode==0 && column.className=="state"){
             return "color:rgba(236, 102, 0, 1)";
         }else if(row.stateCode==1 && column.className=="state"){
            return "color:rgba(51, 51, 51, 1)";
         }else if(row.stateCode==2 && column.className=="state"){
            return "color:rgba(6, 183, 0, 1)";
         }
          if(column.className=="column1"){
              
              return "color:rgba(45, 140, 240, 1);cursor: pointer;";
          }
       }
    }
}
</script>

<style lang="scss" scoped>
   .content{
       padding:32px 20px;
       overflow: hidden;
       .info{
         border-top:3px solid rgba(200, 16, 46, 1);
         background: #fff;
         .top{
             width:100%;
             text-align: left;padding:10px 30px;
             div{
              width: 16.67%;display: inline-block;
             }
             span{margin-right: 10px;}
            .inputs{width:143px;height: 30px;border-radius: 18px;line-height: 30px;
            }
         }
       }
     
     
   }
  
</style>