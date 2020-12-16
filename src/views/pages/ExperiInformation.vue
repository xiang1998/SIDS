<template>
  <div class="content">
    <div class="title font-bold tl">試験データ詳細</div>
     <div class="top mt mb tl font-m">
           <div class="fbox fbox-ac">
            <span class="name mr">試験ID</span>
            <span class="txt">A0001</span>
          </div>
           <div class="fbox fbox-ac">
            <span class="name mr">試験名称</span>
             <span class="txt">目元試験１</span>
          </div>
           <div class="fbox fbox-ac">
            <span class="name mr">担当グループ</span>
             <span class="txt">目元試験組</span>
          </div>
          <div class="fbox fbox-ac">
            <span class="name mr">登録日付</span>
             <span class="txt">2020/11/27</span>
          </div>
          <el-button
            style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;"
            class="color-white"
            icon="el-icon-edit"
            round
            >編集</el-button
          >
    </div>
    <div class="form">
        <div class="ftop no select clearfix">
            <div class="box fl">
                 <div class="fbox fbox-ac">
                    <span class="name mr">ファイル種別</span>
                    <el-select v-model="value" placeholder="ファイル種別を選択してください" class="inputs">
                        
                    </el-select>
                    <el-button
                        style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;"
                        class="color-white"
                        icon="el-icon-search"
                        round
                        >検索</el-button
                    >
                </div>
            </div>
           <div class="box fr">
               <div class="fbox fbox-ac">
                <el-button
                    style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;"
                    class="color-white"
                    round
                    >データ登録</el-button
                >
                <el-button
                    style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;"
                    class="color-white"
                    icon=''
                    round
                    >一括ダウンロード(中継)</el-button
                >
                <el-button
                    style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;"
                    class="color-white"
                    icon='el-icon-delete'
                    round
                    >ファイル一括削除</el-button
                >
            </div>
           </div>
        </div>
        <div class="table">
            <el-table
                class="tables mb no"
                :data="tableData"
                :stripe="true"
                style="width: 100%"
                :header-cell-style="tableHeaderColor" 
                >
                <el-table-column prop="id" align='center' label="ファイルID"   width="" class="pl">
                </el-table-column>
                <el-table-column prop="name" align='center' label="ファイル名" width="">
                </el-table-column>
                <el-table-column prop="" align='center' label="ファイル種別"> </el-table-column>
                <el-table-column prop="" align='center' label='サイズ'></el-table-column>
                <el-table-column prop="user"  align='center' label='登録者'></el-table-column>
                <el-table-column prop="time" align='center' label="登録日付"> </el-table-column>
                <el-table-column prop='' align='center' label='操作'>
                    <template slot-scope="scope">
                        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pageInfo">
                <div class="pagination"> <el-pagination
                    background
                    layout="prev, pager, next,jumper"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage1"
                    :total="50" class="pb">
                    </el-pagination></div>
                <div class="btn no" @click="back">
                    <el-button
                    style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px;border-radius:18px"
                    class="color-white"
                    round
                    >戻る</el-button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
   data(){
       return{
           currentPage1:1,
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
       
       back(){
           this.$router.go(-1);
       }
   }
}
</script>

<style lang='scss' scoped>
    .el-button:focus,
    .el-button:hover {
    color: #fff;
    border-color: #f72043;
    }
    .content{
         padding:32px 20px;
          .top{
             padding:17px 64px 20px 64px;background: #fff;
             div{
                 display: inline-block;margin-right:150px;
                 .name{
                     color:rgba(153, 153, 153, 1);
                 }
             }
         }
        .form{
          background: #fff;border-top:3px solid rgba(200, 16, 46, 1);
          .ftop{
              padding:10px 20px 10px 30px;
              div{
                  display: inline-block;
              }
          }
          .tables{
               .el-button{
                   color:rgba(51, 51, 51, 1);
               }
              .el-button:focus,
               .el-button:hover {
                 color: #f72043;
             }
          }
           .pageInfo{position: relative;
           .btn{position: absolute;right:30px}
         }
         .pagination,.btn{display: inline-block;}
        }
    }
   
</style>