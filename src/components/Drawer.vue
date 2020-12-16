<template>
    <el-drawer
    :title='title'
    :before-close="handleClose"
    :visible.sync="dialog"
    direction="rtl"
    custom-class="demo-drawer"
    :show-close='flag'
    ref="drawer"
    :wrapperClosable='flag'
    class="draw"
    >
    <div class="demo-drawer__content">
       <div class="conForm">
           <el-form :model="ruleForm"  ref="ruleForm" label-width="126px" class="demo-ruleForm">
              <el-form-item label="ユーザID" prop="name">
                <span class="tl" v-if="show">COM0002</span>
                <el-input v-model="ruleForm.name" placeholder="COM0002" v-else class="inputs"></el-input>
              </el-form-item>
              <el-form-item label="権限設定単位" prop="region">
                <el-radio-group v-model="ruleForm.radio" @change='radioFun' class="group">
                  <el-radio :label="1">グループ</el-radio>
                  <el-radio :label="2">試験</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="担当グループ">
                  <el-select v-model="value" placeholder="担当グループを選択してください"  class="inputs" :disabled="ruleForm.flags">
                      
                  </el-select>
              </el-form-item>
              <el-form-item label="試験ID" prop="delivery">
                  <el-input v-model="idVal" placeholder="試験IDを入力する" class="inputs" :disabled="ruleForm.flag"></el-input>
              </el-form-item>
              <el-form-item label="参照権限" prop="type">
                 <el-switch
                      v-model="value1"
                      active-text=""
                      inactive-text="">
                    </el-switch>
              </el-form-item>
              <el-form-item label="ダウンロード権限" prop="resource">
                  <el-switch
                      v-model="value2"
                      active-text=""
                      inactive-text="">
                    </el-switch>
              </el-form-item>
              <el-form-item label="アップロード権限" prop="desc">
                   <el-switch
                      v-model="value3"
                      active-text=""
                      inactive-text="">
                    </el-switch>
              </el-form-item>
            </el-form>
       </div>
      <div class="demo-drawer__footer no clearfix">
        <div class="fbox fl">
           <el-button  style="background: #c8102e;margin-left:20px;height:48px;line-height:48px;padding:0 23px;;width:130px;border-radius:24px"
            class="color-white"
            round type="primary" v-show="show">删除</el-button>
        </div>
        <div class="fbox fr">
           <el-button style="background: #c8102e;margin-left:20px;height:48px;line-height:48px;padding:0 23px;;width:130px;border-radius:24px"
            class="color-white"
            round   type="primary" @click="$refs.drawer.closeDrawer()">更新</el-button>
           <el-button style="background:rgba(245, 245, 245, 1);margin-left:20px;height:48px;line-height:48px;padding:0;width:130px;border-radius:24px"
            class="back"
            round  @click="cancelForm" >戻る</el-button>
        </div>
        
      </div>
    </div>
    </el-drawer>
</template>

<script>
export default {
    name:'Drawer',
   data(){
       return{
            loading: false,
            ruleForm: {
               
                region: '',
                delivery: false,
                type: [],

                radio: 1,
                flag:true,
                flags:false,
                name: 'COM0002',
            },
            formLabelWidth: '80px',
            timer: null,
            flag:false,
            value1:true,
            value2:false,
            value3:false,
            idVal:'',
            value:''
       }
   },
   props:[
     'title','dialog','show'
   ],
   methods:{
    handleClose(done) {
      if (this.loading) {
        return;
      }
      this.$confirm('确定要提交表单吗？')
        .then(_ => {
          this.loading = true;
          this.timer = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
             this.$emit("cancel", this.dialog);
            }, 400);
          }, 2000);
        })
        .catch(_ => {});
    },
    cancelForm() {
        this.loading = false;
        this.$emit("cancel", this.dialog);
        console.log(this.dialog)
        clearTimeout(this.timer);
        },
     radioFun(e){
        if(e==2){
           this.ruleForm.flags=true;
           this.ruleForm.flag=false
        }else{
          this.ruleForm.flags=false;
          this.ruleForm.flag=true;
        }
    }
    },
    
}
</script>

<style lang='scss' scoped>
.conForm{
   .inputs{
     width:260px;
   }
   
}
  .back:focus,
   .back:hover {
    color: #f72043;
    }
    
</style>