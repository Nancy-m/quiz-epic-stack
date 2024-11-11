import { ClipboardCheck, Search } from "lucide-react"
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* <CardHeader>
        <div className="h-8 w-8 bg-emerald-500 rounded"></div>
      </CardHeader> */}
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-2xl font-semibold text-center">专业的企业调研平台</h1>
        <h6>问卷调研/考试测评</h6>
        <div className="flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0">
              <ClipboardCheck className="w-full h-full text-emerald-500" />
            </div>
            <div className="absolute bottom-0 right-0">
              <Search className="w-12 h-12 text-emerald-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-20">
        <Card className="w-full max-w-md">
          <CardContent className="space-y-6">
            <Tabs defaultValue="phone" className="w-full p-4" onValueChange={setLoginType}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="phone">手机号登录</TabsTrigger>
                <TabsTrigger value="account">账号登录</TabsTrigger>
              </TabsList>
              
              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">手机号</Label>
                  <Input id="phone" type="tel" placeholder="请输入手机号" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone-code">验证码</Label>
                  <div className="flex justify-between items-center">
                    <Input id="phone-code" placeholder="请输入验证码" />
                    <Button variant="outline" size="sm" className="text-emerald-500 ml-2">
                      获取验证码
                    </Button>
                  </div>
                  
                </div>
              </TabsContent>
              
              <TabsContent value="account" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="account">账号</Label>
                  <Input id="account" placeholder="请输入账号" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account-code">验证码</Label>
                  <Input id="account-code" placeholder="请输入验证码" />
                </div>
              </TabsContent>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  我已阅读并同意《服务条款》和《隐私政策》
                </label>
              </div>

              <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600">
                登录
              </Button>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}