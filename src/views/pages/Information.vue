<template>
  <div class="content">
      <div class="title font-bold tl">データ登録</div>
      <div class="main no">
          <div class="top mb">
            <div class="row tl">
                <el-input
                class="inputs"
                placeholder="試験IDを入力する"
                clearable
                ></el-input> 
                <el-button
                style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
                class="color-white"
                icon="el-icon-search"
                round
                >検索</el-button>
            </div>
             <div class="bottom tl">
                 <div class="fbox fbox-ac">
                     <span class="name font-m">試験ID</span>
                     <span class="txt font-m">A0001</span>
                 </div>
                 <div class="fbox fbox-ac">
                     <span class="name font-m">試験名称</span>
                     <span class="txt font-m">目元試験１</span>
                 </div>
                  <div class="fbox fbox-ac">
                     <span class="name font-m">担当グループ</span>
                     <span class="txt font-m">データセット</span>
                 </div>
             </div>
          </div>
          <div class="stable">
              <div class="tps tr">
                  <span>ファイル種別一括設定</span>
                    <el-select v-model="value" placeholder="请选择" class="select">
                        <!-- <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option> -->
                    </el-select>
                     <el-button
                        style="background: #c8102e;margin-left:8px;height:30px;line-height:30px;padding:0 23px"
                        class="color-white"
                        round
                        >確認</el-button>
                     <el-button
                        style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
                        class="color-white"
                        round
                        >データ追加</el-button>
                     <el-button
                        style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
                        class="color-white"
                        round
                        >ファイル一覧取得(中継)</el-button>
                     <el-button
                        style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
                        class="color-white"
                        round
                        >ファイル一覧取得(共有)</el-button>
                    <el-button
                        style="background: #c8102e;margin-left:20px;height:30px;line-height:30px;padding:0 23px"
                        class="color-white"
                        round
                        >ファイル一覧クリア</el-button>
              </div>
              <div class="stop">
                    <el-table
                        class="tables select"
                        :data="tableData"
                        :stripe="true"
                        style="width: 100%"
                        :header-cell-style="tableHeaderColor" 
                        >
                        <el-table-column prop="id" align='center' label="ファイルID"  width="" class="pl" style="">
                        </el-table-column>
                        <el-table-column prop="name" align='center' label="ファイル名" width="">
                        </el-table-column>
                        <el-table-column prop="" align='center' label="ファイル種別">
                            <template>
                                <el-select v-model="value" placeholder="请选择">
                                   
                                </el-select>
                            </template>
                        </el-table-column>
                        <el-table-column prop="time" align='center' label='更新日付'></el-table-column>
                        <el-table-column prop="state"  align='center' label='選択' type="selection" width="200px">
                        </el-table-column>
                    </el-table>
                    <div class="btn tr">
                       <el-button
                        style="background: #c8102e;height:30px;line-height:30px;padding:0 23px;margin-right:36px;"
                        class="color-white  dlogin"
                        round
                        >登録</el-button>
                    </div>
                     
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'Information',
  data(){
      return{
          value: '',
          tableData: [
        {
          id: "1",
          name: "王小虎",
          group: "上海市普陀区金沙江路 1518 弄",
          time: "2016-05-02",
          state:''
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
    }
}
</script>

<style lang="scss" scoped>
   .title{ padding:32px 20px 0 20px;}
   .main{
        padding:20px 20px;
       .top{
           background: #fff;
           .inputs{width:245px;border-radius: 18px;}
           .row{padding:10px 20px;}
           .bottom{
               border-top:1px solid rgba(238, 238, 241, 1);
               div{
                   display: inline-block;padding:10px 53px 16px 53px;
                   .name{margin-right:20px;color:rgba(153, 153, 153, 1);}
               }
           }
       }
       .stable{
           background: #fff;
           .tps{
               background: #fff;padding:10px 36px;
               border-top:3px solid rgba(200, 16, 46, 1);
               span{
                   margin-right: 4px;
               }
           }
           .tables{
                   margin-bottom: 17px;
            }
            .dlogin{
                margin-bottom:15px
            }
       }
   }
   .el-button:focus,
    .el-button:hover {
    color: #fff;
    border-color: #f72043;
    }
    
</style>