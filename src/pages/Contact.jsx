import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
	const apiKey = "b29ca6f2-b850-409b-9e9e-b608e1ec4e5f";
	const formId = "46993994"; // replace with your actual form ID

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = {
			fields: [
				{ name: "full_name", value: name },
				{ name: "email", value: email },
				{ name: "message", value: message },
			],
		};

		try {
			const response = await axios.post(
				`https://api.hsforms.com/submissions/v3/integration/submit/${formId}/${apiKey}`,
				data,
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.status === 200) {
				toast.success("Message sent successfully!");
				setName("");
				setEmail("");
				setMessage("");
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error(error);
			toast.error("An error occurred while sending the message.");
		}
	};
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className='w-full'>
				<section className='relative h-[300px] md:h-[400px] overflow-hidden'>
					<img
						src='/bedroom.jpg'
						width='100%'
						alt='Contact Banner'
						className='object-cover object-center '
					/>
					<div className='absolute mt-10 md:mt-20 inset-0 bg-black/50 flex flex-col items-center bg-[#fff]/40 justify-center px-4 text-center'>
						<h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>
							Get in Touch with MeraPG
						</h1>
						<p className='mt-4 text-lg sm:text-xl'>
							Have a question or need assistance? Our team is here
							to help.
						</p>
					</div>
				</section>
				<section className='py-12 md:py-16 lg:py-20'>
					<div className='container grid gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-16'>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold tracking-tighter text-foreground sm:text-3xl'>
								Contact Information
							</h2>
							<div className='space-y-2'>
								<div className='flex items-center gap-2'>
									<IoIosMail className='h-5 w-5 text-prime' />
									<Link
										to='mailto:merapgofficial@gmail.com'
										className='text-muted-foreground hover:text-primary'>
										dheerajsingh2100@gmail.com
									</Link>
								</div>
								<div className='flex items-center gap-2'>
									<MdOutlinePhonelinkRing className='h-5 w-5 text-prime' />
									<a
										href='tel:+919026315148'
										className='text-muted-foreground hover:text-primary'>
										+91-8953591701
									</a>
								</div>
								<div className='flex items-start gap-2'>
									<FaMapMarkerAlt className='mt-1 h-5 w-5 text-prime' />
									<div className='text-muted-foreground'>
										Karrahi Road <br />
										Naubasta, Kanpur Nagar (208021)
									</div>
								</div>
							</div>
						</div>
						<div className='space-y-4'>
							<h2 className='text-2xl font-bold tracking-tighter text-foreground sm:text-3xl'>
								Send Us a Message
							</h2>
							<form className='space-y-4' onSubmit={handleSubmit}>
								<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
									<div>
										<Label htmlFor='name'>Name</Label>
										<Input
											id='name'
											placeholder='Enter your name'
											value={name}
											onChange={(e) =>
												setName(e.target.value)
											}
										/>
									</div>
									<div>
										<Label htmlFor='email'>Email</Label>
										<Input
											id='email'
											type='email'
											placeholder='Enter your email'
											value={email}
											onChange={(e) =>
												setEmail(e.target.value)
											}
										/>
									</div>
								</div>
								<div>
									<Label htmlFor='message'>Message</Label>
									<Textarea
										id='message'
										rows={5}
										placeholder='Enter your message'
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
									/>
								</div>
								<Button
									type='submit'
									className='bg-prime hover:bg-prime/90'>
									Send Message
								</Button>
							</form>
						</div>
					</div>
				</section>
				<section className='py-12 sm:py-16 lg:py-20'>
					<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='aspect-w-16 aspect-h-9'>
							<iframe
								src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1254.1641932899295!2d80.24654286963913!3d26.497390698784212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37bb2993d24f%3A0xff91b9cad7fa339f!2sJai%20Durga%20Traders!5e1!3m2!1sen!2sin!4v1723294303916!5m2!1sen!2sin'
								width='100%'
								height='450'
								style={{ border: 0 }}
								allowFullScreen
								loading='lazy'
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
