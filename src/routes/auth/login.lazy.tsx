/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod"
import {
  createLazyFileRoute,
  Navigate,
  useNavigate,
} from "@tanstack/react-router"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { useLogin } from "../../hooks/useLogin"
import { getLocalItem, setLocalItem } from "../../utils"

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
})

const LoginPage = () => {
  const token = getLocalItem("token")
  const { mutateAsync: login, isPending } = useLogin()
  const navigate = useNavigate()

  const { handleSubmit, control } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur",
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (value: z.infer<typeof loginSchema>) => {
    try {
      const res = await login(value)
      if (res.accessToken) {
        setLocalItem("token", res.accessToken)
        navigate({ to: "/" })
      }
    } catch (error: any) {
      console.error(error?.message)
    }
  }

  if (token) {
    return <Navigate to="/" />
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-96 drop-shadow-xl border border-gray-200">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body"
        >
          <h2 className="text-xl font-medium text-center mb-4">
            Login Your Account
          </h2>
          <Controller
            name="username"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered w-full max-w-xs"
                  disabled={isPending}
                  {...field}
                />
                {error && (
                  <p className="text-sm text-red-400">{error.message}</p>
                )}
              </div>
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div className="flex flex-col gap-1">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  disabled={isPending}
                  {...field}
                />
                {error && (
                  <p className="text-sm text-red-400">{error.message}</p>
                )}
              </div>
            )}
          />

          <button
            className="btn btn-primary"
            disabled={isPending}
          >
            {" "}
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export const Route = createLazyFileRoute("/auth/login")({
  component: LoginPage,
})
