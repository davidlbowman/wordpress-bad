"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function Component() {
	const [isChecked, setIsChecked] = useState(false)

	const handleSubmit = () => {
		if (isChecked) {
			alert("good boy")
		} else {
			alert(
				"are you now or have you ever been a member of the wp engine party?",
			)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="pb-4">
					<CardTitle className="text-2xl font-bold text-center">
						WordPress Test
					</CardTitle>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="flex items-start space-x-3">
						<Checkbox
							id="affiliation"
							checked={isChecked}
							onCheckedChange={(checked) => setIsChecked(checked === true)}
							className="mt-1"
						/>
						<label htmlFor="affiliation" className="text-sm leading-tight">
							I am not affiliated with WP Engine in any way, financially or
							otherwise.
						</label>
					</div>
					<Button
						onClick={handleSubmit}
						className="w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white py-2"
					>
						Submit
					</Button>
				</CardContent>
			</Card>
		</div>
	)
}
