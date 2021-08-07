data "aws_ami" "session_host" {
  most_recent = true
  owners      = ["amazon"]

  filter {
    name   = "owner-alias"
    values = ["amazon"]
  }

  filter {
    name   = "name"
    values = ["amzn2-ami-hvm-2.0.????????-x86_64-gp2"]
  }

  filter {
    name   = "state"
    values = ["available"]
  }
}

resource "aws_security_group" "session_host" {
  vpc_id = var.vpc_id

  egress {
    from_port = 0
    to_port = 0
    protocol = "all"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "Session host security group"
  }
}

data "template_file" "user_data" {
  template = file("${path.module}/user_data/boot.sh")
}

resource "aws_instance" "session_host" {
  ami                    = data.aws_ami.session_host.id
  instance_type          = var.instance_size
  iam_instance_profile   = aws_iam_instance_profile.default.name
  vpc_security_group_ids = [aws_security_group.session_host.id]
  user_data              = data.template_file.user_data.rendered 
  subnet_id              = var.public_subnet_id

  tags = {
    Name = "Session manager host"
  }
}