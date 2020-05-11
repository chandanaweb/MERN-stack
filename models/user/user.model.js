import mongoose from 'mongoose'

const schema = mongoose.schema

const UserSchema = new schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true
	  },
  
	  password: {
		type: String,
		required: true
	  }
})

export const User = mongoose.model('user', userSchema)