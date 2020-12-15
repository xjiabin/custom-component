import LgForm from '../'
import LgFormItem from '../../formitem'
import LgInput from '../../input'
import LgButton from '../../button'

export default {
  title: 'LgForm',
  component: LgForm
}

export const Login = () => ({
  components: {
    LgForm,
    LgFormItem,
    LgInput,
    LgButton
  },
  template: `
    <lg-form :model="ruleForm" :rules="rules" ref="ruleForm">
      <lg-form-item label="用户名" prop="name">
        <lg-input v-model="ruleForm.name"></lg-input>
      </lg-form-item>
      <lg-form-item label="密码" prop="password">
        <lg-input type="password" v-model="ruleForm.password"></lg-input>
      </lg-form-item>
      <lg-form-item>
        <lg-button type="primary" @click="submitForm('ruleForm')">登录</lg-button>
      </lg-form-item>
    </lg-form>
  `,
  data() {
    return {
      ruleForm: {
        name: '',
        password: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          alert('验证失败')
        }
      })
    }
  }
})
