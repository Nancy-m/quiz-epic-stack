import { useState } from "react"
import { Button } from "#app/components/ui/button"
import { Card, CardContent, CardHeader } from "#app/components/ui/card"
import { Checkbox } from "#app/components/ui/checkbox"
import { Input } from "#app/components/ui/input"
import { Label } from "#app/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#app/components/ui/tabs"

export default function Component() {
  const [loginType, setLoginType] = useState("phone")

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 bg-[linear-gradient(1deg,#F9FFFE_0%,#F9FFFE_23%,#E6FFF9_100%)] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.08)]">
      <div className="flex items-start">
        {/* <CardHeader>
          <div className="h-8 w-8 bg-emerald-500 rounded"></div>
        </CardHeader> */}
        <div className="flex flex-col items-start justify-center space-y-4">
          <h1 className="text-2xl font-semibold text-center">专业的企业调研平台</h1>
          <h6>问卷调研/考试测评</h6>
          <div className="flex justify-center">
            <img src="../../../public/img/login-icon.png" alt="LogoIcon" className="object-cover w-{324} h-auto"/>
          </div>
        </div>
        <div className="ml-20 2xl:ml-32">
          <Card className="w-full max-w-2xl">
            <CardContent className="p-10">
              <Tabs defaultValue="phone" className="w-full p-4" onValueChange={setLoginType}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="phone">手机号登录</TabsTrigger>
                  <TabsTrigger value="account">账号登录</TabsTrigger>
                </TabsList>
                
                <TabsContent value="phone" className="mt-6">
                  <div className="mb-4 flex flex-col gap-3">
                    <Label htmlFor="phone">手机号</Label>
                    <Input id="phone" type="tel" placeholder="请输入手机号" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="phone-code">验证码</Label>
                    <div className="flex justify-between items-center">
                      <Input id="phone-code" placeholder="请输入验证码" />
                      <Button  size="sm" className="ml-2 flex-shrink-0">
                        获取验证码
                      </Button>
                    </div>
                    
                  </div>
                </TabsContent>
                
                <TabsContent value="account" className="mt-6">
                  <div className="mb-4 flex flex-col gap-3">
                    <Label htmlFor="account">账号</Label>
                    <Input id="account" placeholder="请输入账号" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label htmlFor="account-code">密码</Label>
                    <Input id="account-code" placeholder="请输入密码" />
                  </div>
                </TabsContent>

                <div className="flex items-center space-x-2 mt-4">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium "
                  >
                    我已阅读并同意《服务条款》和《隐私政策》
                  </label>
                </div>

                <Button className="w-full mt-8">
                  登录
                </Button>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}